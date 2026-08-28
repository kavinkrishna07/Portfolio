"""
Simulation Engine for Intentionally Vulnerable Target Application.

SECURITY NOTICE:
This module contains ZERO OS execution calls (no os.system, no subprocess, no eval, no exec).
It simulates command injection and host ping behavior purely through string parsing and mock outputs.
"""

import re
import datetime

# Global target mode state: "vulnerable" or "remediated"
TARGET_MODE = "vulnerable"

def get_target_mode():
    return TARGET_MODE

def set_target_mode(mode):
    global TARGET_MODE
    if mode in ["vulnerable", "remediated"]:
        TARGET_MODE = mode
        return True
    return False

# Predefined harmless command outputs for realistic simulated execution
SIMULATED_COMMANDS = {
    "whoami": "www-data",
    "hostname": "cyberlab-target-01",
    "id": "uid=33(www-data) gid=33(www-data) groups=33(www-data)",
    "date": f"Fri Aug 21 {datetime.datetime.now().strftime('%H:%M:%S')} UTC 2026",
    "uptime": "15:42:00 up 14 days, 3:12, 1 user, load average: 0.04, 0.02, 0.01",
    "uname": "Linux cyberlab-target-01 5.15.0-100-generic #110-Ubuntu SMP x86_64 GNU/Linux",
    "uname -a": "Linux cyberlab-target-01 5.15.0-100-generic #110-Ubuntu SMP x86_64 GNU/Linux",
    "pwd": "/var/www/html/host-checker",
    "ls": "app.py  simulation.py  static  templates",
}

def simulate_host_check(raw_input: str) -> dict:
    """
    Simulates checking host reachability and command execution based on current TARGET_MODE.
    """
    raw_input = raw_input.strip()
    if not raw_input:
        return {
            "status": "error",
            "message": "Input cannot be empty.",
            "mode": TARGET_MODE,
            "injection_detected": False,
            "output": ""
        }

    if TARGET_MODE == "remediated":
        # Strict validation: Only allow domain names and IPv4/IPv6 characters
        # Rejects command separators like ;, |, &, `, $, etc.
        strict_regex = r'^[a-zA-Z0-9.-]+$'
        if not re.match(strict_regex, raw_input):
            return {
                "status": "error",
                "message": "Security Error: Invalid characters detected in host input. Request blocked by strict input validation filter.",
                "host": raw_input,
                "mode": "remediated",
                "injection_detected": False,
                "output": "ACCESS DENIED: Input failed regex permit-list check ^[a-zA-Z0-9.-]+$"
            }
        
        # Valid input in secure mode
        simulated_output = (
            f"PING {raw_input} (127.0.0.1) 56(84) bytes of data.\n"
            f"64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.035 ms\n"
            f"64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.041 ms\n"
            f"--- {raw_input} ping statistics ---\n"
            f"2 packets transmitted, 2 received, 0% packet loss, time 1002ms"
        )
        return {
            "status": "success",
            "host": raw_input,
            "mode": "remediated",
            "injection_detected": False,
            "reachable": True,
            "output": simulated_output,
            "info": "Host check completed securely using parameterized execution simulation."
        }

    # TARGET_MODE == "vulnerable"
    # Detect shell separators: ;, |, &&, ||, `, $(...)
    separators_pattern = r'(;|\&\&|\|\||\||`|\$\()'
    has_injection = bool(re.search(separators_pattern, raw_input))

    if not has_injection:
        # Standard input without injection
        simulated_output = (
            f"PING {raw_input} (127.0.0.1) 56(84) bytes of data.\n"
            f"64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms\n"
            f"64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.045 ms\n"
            f"--- {raw_input} ping statistics ---\n"
            f"2 packets transmitted, 2 received, 0% packet loss"
        )
        return {
            "status": "success",
            "host": raw_input,
            "mode": "vulnerable",
            "injection_detected": False,
            "reachable": True,
            "output": simulated_output,
            "info": "Host check completed."
        }

    # Input contains command separators (Vulnerable Mode simulation)
    # Split input by command operators to extract individual commands
    parts = re.split(r';|\&\&|\|\||\|', raw_input)
    output_lines = []

    # First part is assumed to be host ping
    host_part = parts[0].strip()
    if host_part:
        output_lines.append(f"PING {host_part} (127.0.0.1) 56(84) bytes of data.")
        output_lines.append("64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.032 ms")
        output_lines.append(f"--- {host_part} ping statistics ---")
        output_lines.append("1 packets transmitted, 1 received, 0% packet loss")
    
    # Process subsequent injected command parts
    for cmd in parts[1:]:
        cmd_clean = cmd.strip()
        if not cmd_clean:
            continue
        
        # Check for echo command
        if cmd_clean.startswith("echo "):
            echo_val = cmd_clean[5:].strip().strip('"').strip("'")
            output_lines.append(echo_val)
        # Check predefined harmless commands
        elif cmd_clean in SIMULATED_COMMANDS:
            output_lines.append(SIMULATED_COMMANDS[cmd_clean])
        else:
            # Deterministic simulation for arbitrary test probe words (e.g., test_probe)
            output_lines.append(f"[SIMULATED_SHELL_OUTPUT]: Executed injected payload command '{cmd_clean}'")

    combined_output = "\n".join(output_lines)
    return {
        "status": "success",
        "host": raw_input,
        "mode": "vulnerable",
        "injection_detected": True,
        "reachable": True,
        "output": combined_output,
        "info": "Host check completed with simulated command output."
    }
