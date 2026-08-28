# Application 2: Intentionally Vulnerable Target Application

## Purpose
This application simulates a typical web-based **Host Information Checker** utility (similar to network diagnostic tools like `ping` or `traceroute`). It serves as an educational target for testing Command Injection scanning without exposing the host operating system to danger.

## Safety & Simulation Architecture
- **Zero OS Subprocess Execution**: No system commands are ever invoked using `os.system()`, `subprocess.Popen(shell=True)`, `exec()`, or `eval()`.
- **Mock Command Engine (`simulation.py`)**:
  - Handles normal IP/domain input by returning simulated ping responses.
  - Recognizes command delimiters (`;`, `|`, `&&`, `||`) and basic safe probe commands (`whoami`, `hostname`, `id`, `date`, `uptime`, `echo`).
  - Returns simulated command output to demonstrate how OS command concatenation vulnerability manifests in real web applications.
- **Remediation Mode**: Offers an interactive toggle to switch the app to **Remediation Mode**, which enforces strict regex allowlists (`^[a-zA-Z0-9.-]+$`), demonstrating proper defense against command injection.

## How to Run Locally
```bash
python app.py
```
App will bind to: `http://127.0.0.1:5001`
