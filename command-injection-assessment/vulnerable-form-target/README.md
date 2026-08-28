# Application 3: Vulnerable Contact & Feedback Form Target (Port 5002)

## Purpose
This application demonstrates command injection vulnerabilities in a **Contact/Feedback Web Form** featuring 2 separate user input fields:
1. **Name**
2. **Subject**

If a command separator (`;`, `|`, `&&`) and command syntax are supplied in **either** input field, the application demonstrates how un-sanitized form inputs can lead to command injection.

## Security & Simulation Design
- **Zero Real OS Execution**: 100% simulated command engine (`simulation.py`).
- **Remediation Mode**: Interactive mode toggle enforcing strict permit-list validation on form input fields.

## How to Run
```bash
python app.py
```
App will bind to: `http://127.0.0.1:5002`
