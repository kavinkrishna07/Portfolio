# Application 1: Command Injection Vulnerability Scanner

## Purpose
This application is the **Security Testing Dashboard & Engine**. It allows security analysts to perform automated vulnerability assessments against the local target application (`http://127.0.0.1:5001`).

## Safety Architecture & Enforcement
- **Local Target Restriction**: Enforces strict URL validation. Refuses requests to external IP addresses, public domain names, or remote systems.
- **Safe Payload Probe Suite**: Uses a predefined suite of harmless probes (`google.com; whoami`, `google.com | hostname`, `google.com && id`, `google.com; echo TEST_PROBE`, `invalidhost || date`).
- **Zero OS Subprocess Execution**: Test inputs are sent over HTTP to the target application and are NEVER executed locally on the scanner host operating system.
- **Heuristic Comparison**:
  1. Executes baseline host check request (`google.com`).
  2. Submits safe probe payloads.
  3. Compares response status, output reflection, and simulated shell indicators.
  4. Generates an evidence breakdown, risk level, and remediation guidance.

## How to Run Locally
```bash
python app.py
```
Scanner Dashboard will bind to: `http://127.0.0.1:5000`
