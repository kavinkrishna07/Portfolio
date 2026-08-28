"""
Safe Simulation Engine for Form Target Application (2 Input Fields: Name & Subject).

SECURITY & SAFETY DESIGN:
- Permits real execution ONLY for a strict permit-list of harmless network diagnostic commands
  (ping, whois, whoami, hostname, date).
- Strictly blocks dangerous keywords (rm, nc, bash, wget, curl, cat, sudo, etc.).
- Safe fallback handles unrecognized inputs deterministically without risk.
- In Remediation Mode, enforces strict regex permit-listing on both Name and Subject fields.
"""

import re
import subprocess
import platform

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

# Strict permit-list of safe network diagnostic commands
SAFE_COMMANDS = {"ping", "whois", "whoami", "hostname", "date"}

# Dangerous keywords that are strictly blocked under all circumstances
DANGEROUS_KEYWORDS = [
    "rm", "unlink", "mkfifo", "nc", "ncat", "netcat", "bash", "sh", "zsh", "python",
    "python3", "perl", "ruby", "php", "wget", "curl", "chmod", "chown", "sudo", "su",
    "cat", "head", "tail", "more", "less", "dd", "shadow", "passwd", "reboot", "shutdown"
]

def execute_safe_command(cmd_str: str) -> str:
    """
    Executes a safe basic network command (like ping or whois) on the OS if it passes permit-list checks.
    Constrains arguments to prevent command abuse while demonstrating real output.
    """
    cmd_clean = cmd_str.strip()
    
    # Safety Check 1: Block any dangerous keywords
    for kw in DANGEROUS_KEYWORDS:
        if re.search(rf'\b{re.escape(kw)}\b', cmd_clean, re.IGNORECASE):
            return f"[SECURITY BLOCKED]: Command '{kw}' is blocked for host safety."

    # Extract base command token (e.g., 'ping' from 'ping 127.0.0.1')
    tokens = cmd_clean.split()
    base_cmd = tokens[0].lower() if tokens else ""

    if base_cmd in SAFE_COMMANDS:
        # Constrain ping to maximum 2 packets so it returns fast
        if base_cmd == "ping":
            target = tokens[1] if len(tokens) > 1 else "127.0.0.1"
            # Strip control characters from target
            target = re.sub(r'[^a-zA-Z0-9.-]', '', target) or "127.0.0.1"
            
            if platform.system() == "Windows":
                cmd_list = ["ping", "-n", "2", target]
            else:
                cmd_list = ["ping", "-c", "2", target]
        elif base_cmd == "whoami":
            cmd_list = ["whoami"]
        elif base_cmd == "hostname":
            cmd_list = ["hostname"]
        elif base_cmd == "date":
            cmd_list = ["date", "/t"] if platform.system() == "Windows" else ["date"]
        elif base_cmd == "whois":
            target = tokens[1] if len(tokens) > 1 else "google.com"
            target = re.sub(r'[^a-zA-Z0-9.-]', '', target) or "google.com"
            cmd_list = ["whois", target]
        else:
            cmd_list = [base_cmd]

        try:
            res = subprocess.run(
                cmd_list,
                shell=False,
                capture_output=True,
                text=True,
                timeout=4
            )
            out = res.stdout.strip() or res.stderr.strip()
            return out if out else f"[Executed command: {' '.join(cmd_list)}]"
        except Exception as e:
            return f"[Simulated Output for '{cmd_clean}']"

    # Fallback simulation output for non-permitted commands
    return f"[SIMULATED OUTPUT]: Executed injected command '{cmd_clean}'"

def simulate_form_submission(name_input: str, subject_input: str) -> dict:
    """
    Processes form submission for 'Name' and 'Subject' fields.
    Prints submitted values and executes safe diagnostic commands if injected in Vulnerable Mode.
    """
    name_clean = name_input.strip()
    subject_clean = subject_input.strip()

    if not name_clean and not subject_clean:
        return {
            "status": "error",
            "message": "Form fields cannot be empty.",
            "mode": TARGET_MODE,
            "injection_detected": False,
            "output": ""
        }

    if TARGET_MODE == "remediated":
        strict_regex = r'^[a-zA-Z0-9\s.-]+$'
        name_valid = not name_clean or bool(re.match(strict_regex, name_clean))
        subject_valid = not subject_clean or bool(re.match(strict_regex, subject_clean))

        if not name_valid or not subject_valid:
            invalid_field = "Name" if not name_valid else "Subject"
            return {
                "status": "error",
                "message": f"Security Error: Invalid shell control characters detected in '{invalid_field}' field. Request blocked by strict input sanitization.",
                "mode": "remediated",
                "injection_detected": False,
                "output": f"ACCESS DENIED: Input field '{invalid_field}' failed permit-list validation ^[a-zA-Z0-9\\s.-]+$"
            }
        
        simulated_output = (
            f"Form submission saved successfully.\n"
            f"Name: {name_clean}\n"
            f"Subject: {subject_clean}\n"
            f"Status: Safe (Sanitized)"
        )
        return {
            "status": "success",
            "mode": "remediated",
            "injection_detected": False,
            "output": simulated_output,
            "info": "Form submission processed securely."
        }

    # TARGET_MODE == "vulnerable"
    separators_pattern = r'(;|\&\&|\|\||\||`|\$\()'
    name_has_inj = bool(re.search(separators_pattern, name_clean))
    subject_has_inj = bool(re.search(separators_pattern, subject_clean))
    has_injection = name_has_inj or subject_has_inj

    output_lines = [
        f"Inputted Name: {name_clean}",
        f"Inputted Subject: {subject_clean}",
        "----------------------------------------"
    ]

    if not has_injection:
        output_lines.append("Status: Form submitted normally.")
        return {
            "status": "success",
            "mode": "vulnerable",
            "injection_detected": False,
            "output": "\n".join(output_lines),
            "info": "Form submitted."
        }

    # Injected input detected in vulnerable mode
    for field_name, field_val in [("Name", name_clean), ("Subject", subject_clean)]:
        if not field_val:
            continue
        
        parts = re.split(r';|\&\&|\|\||\|', field_val)
        if len(parts) > 1:
            output_lines.append(f"\n[Command Injected in '{field_name}' Field]:")
            for cmd in parts[1:]:
                cmd_clean = cmd.strip()
                if not cmd_clean:
                    continue
                
                cmd_res = execute_safe_command(cmd_clean)
                output_lines.append(cmd_res)

    return {
        "status": "success",
        "mode": "vulnerable",
        "injection_detected": True,
        "output": "\n".join(output_lines),
        "info": "Form processed."
    }
