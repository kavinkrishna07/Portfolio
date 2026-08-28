"""
Scanner Engine for Command Injection Vulnerability Assessment.

SECURITY & SAFETY DESIGN:
- Connects ONLY to local endpoints (127.0.0.1 or localhost). Refuses external/remote URLs.
- Sends safe, predefined non-destructive probe payloads to the target endpoint.
- NEVER executes test inputs locally on the scanner host OS.
- Analyzes baseline vs payload response differences to detect command injection vulnerability.
"""

import urllib.request
import urllib.parse
import urllib.error
import json
import time

# List of safe, predefined probe payloads to test for command injection
SAFE_TEST_PAYLOADS = [
    {
        "id": "test-01",
        "name": "Semicolon Operator Probe (whoami)",
        "payload": "google.com; whoami",
        "expected_indicators": ["www-data", "root", "user"],
        "description": "Appends '; whoami' to test for sequential command execution."
    },
    {
        "id": "test-02",
        "name": "Pipe Operator Probe (hostname)",
        "payload": "google.com | hostname",
        "expected_indicators": ["cyberlab-target-01", "hostname"],
        "description": "Appends '| hostname' to test for piped command execution."
    },
    {
        "id": "test-03",
        "name": "AND Operator Probe (id)",
        "payload": "google.com && id",
        "expected_indicators": ["uid=", "gid=", "groups="],
        "description": "Appends '&& id' to test for logical AND command execution."
    },
    {
        "id": "test-04",
        "name": "Echo Token Probe (echo SCAN_PROBE_99)",
        "payload": "google.com; echo SCAN_PROBE_99",
        "expected_indicators": ["SCAN_PROBE_99"],
        "description": "Appends '; echo SCAN_PROBE_99' to test for deterministic output reflecting."
    },
    {
        "id": "test-05",
        "name": "OR Operator Probe (date)",
        "payload": "invalidhost || date",
        "expected_indicators": ["UTC", "2026", "2025", "GMT"],
        "description": "Appends '|| date' to test for fallback command execution."
    }
]

def is_local_target(url_string: str) -> tuple[bool, str]:
    """
    Ensures target URL is strictly constrained to 127.0.0.1 or localhost.
    Prevents scanning external, public, or remote IP addresses.
    """
    try:
        parsed = urllib.parse.urlparse(url_string)
        hostname = parsed.hostname
        if not hostname:
            return False, "Invalid URL format. Hostname is missing."
        
        # Enforce strict local target policy
        if hostname.lower() in ["127.0.0.1", "localhost"]:
            return True, "Valid local target."
        else:
            return False, f"Access Blocked: Target '{hostname}' is not a local lab address. Scanning is restricted strictly to 127.0.0.1 or localhost."
    except Exception as e:
        return False, f"URL parse error: {str(e)}"

def send_http_post(target_url: str, host_payload: str, timeout: int = 5) -> tuple[int, str, dict]:
    """
    Sends HTTP POST request with host parameter to target URL.
    Returns (status_code, raw_response_text, json_dict).
    """
    full_endpoint = target_url.rstrip("/") + "/check_host"
    data_bytes = json.dumps({"host": host_payload}).encode("utf-8")
    
    req = urllib.request.Request(
        full_endpoint,
        data=data_bytes,
        headers={"Content-Type": "application/json", "User-Agent": "CmdInjectionScanner/1.0"},
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            status_code = response.status
            body = response.read().decode("utf-8", errors="ignore")
            try:
                json_data = json.loads(body)
            except json.JSONDecodeError:
                json_data = {}
            return status_code, body, json_data
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="ignore")
        return e.code, body, {}
    except urllib.error.URLError as e:
        return 0, f"Connection Failed: {e.reason}", {}
    except Exception as e:
        return 0, f"Request Error: {str(e)}", {}

def run_assessment(target_url: str) -> dict:
    """
    Executes complete vulnerability assessment workflow against local target URL.
    """
    # Step 1: Enforce Local Target Policy
    is_valid, validation_msg = is_local_target(target_url)
    if not is_valid:
        return {
            "status": "error",
            "message": validation_msg,
            "target_url": target_url,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }

    report = {
        "target_url": target_url,
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "connection_status": "DISCONNECTED",
        "baseline_status": "FAIL",
        "baseline_evidence": "",
        "tests_performed": 0,
        "tests_passed_safe": 0,
        "tests_failed_vulnerable": 0,
        "test_details": [],
        "vulnerability_status": "SECURE",
        "risk_level": "PASS",
        "evidence_summary": [],
        "remediation_advice": ""
    }

    # Step 2: Baseline Response Request
    baseline_payload = "google.com"
    code, body, json_res = send_http_post(target_url, baseline_payload)
    
    if code != 200:
        report["connection_status"] = "FAILED"
        report["baseline_evidence"] = f"Could not connect to target application at {target_url}. HTTP status: {code}. Error: {body}"
        report["remediation_advice"] = "Ensure the target application is running locally on http://127.0.0.1:5001 before starting scan."
        return report

    report["connection_status"] = "CONNECTED"
    report["baseline_status"] = "PASS"
    baseline_output = json_res.get("output", body)
    report["baseline_evidence"] = f"Baseline request ('{baseline_payload}') returned normal host check output (HTTP 200 OK)."

    # Step 3: Run Controlled Injection Tests
    vulnerable_indicators_count = 0
    collected_evidence = []

    for test in SAFE_TEST_PAYLOADS:
        p_code, p_body, p_json = send_http_post(target_url, test["payload"])
        report["tests_performed"] += 1
        
        p_output = p_json.get("output", p_body)
        is_vuln = False
        evidence_found = []

        # Check for explicit injection flag from target simulation or expected command output indicators
        if p_json.get("injection_detected") is True:
            is_vuln = True
            evidence_found.append("Target target app flagged command injection parsing flag")

        for indicator in test["expected_indicators"]:
            if indicator in p_output:
                is_vuln = True
                evidence_found.append(f"Output reflected command indicator: '{indicator}'")

        # Check if response output contains string '[SIMULATED_SHELL_OUTPUT]'
        if "[SIMULATED_SHELL_OUTPUT]" in p_output:
            is_vuln = True
            evidence_found.append("Target returned simulated shell execution tag")

        test_result = {
            "test_id": test["id"],
            "name": test["name"],
            "payload": test["payload"],
            "http_status": p_code,
            "status": "VULNERABLE" if is_vuln else "SECURE",
            "description": test["description"],
            "evidence": "; ".join(evidence_found) if is_vuln else "Input was sanitized/rejected or returned standard error without command execution.",
            "response_snippet": p_output[:250] + ("..." if len(p_output) > 250 else "")
        }

        if is_vuln:
            vulnerable_indicators_count += 1
            report["tests_failed_vulnerable"] += 1
            collected_evidence.append(f"Payload '{test['payload']}': Injected command output reflected in response ({'; '.join(evidence_found)})")
        else:
            report["tests_passed_safe"] += 1

        report["test_details"].append(test_result)

    # Step 4: Final Vulnerability Status & Risk Assessment
    if vulnerable_indicators_count > 0:
        report["vulnerability_status"] = "POTENTIALLY VULNERABLE"
        report["risk_level"] = "HIGH"
        report["evidence_summary"] = collected_evidence
        report["remediation_advice"] = (
            "1. Do NOT pass user-controlled input directly into shell execution functions or string concatenations.\n"
            "2. Enforce strict input validation using permit-list regular expressions (e.g. ^[a-zA-Z0-9.-]+$).\n"
            "3. If command execution is necessary, use safe API abstractions with argument arrays (e.g. subprocess.run(['ping', '-c', '4', host])) without shell=True.\n"
            "4. Avoid shell command execution entirely by using native Python network libraries (e.g. socket, urllib)."
        )
    else:
        report["vulnerability_status"] = "SECURE"
        report["risk_level"] = "PASS / LOW"
        report["evidence_summary"] = ["Target application cleanly rejected or sanitized all command-injection test payloads without executing command syntax."]
        report["remediation_advice"] = "Target application appears adequately defended against basic command injection."

    return report
