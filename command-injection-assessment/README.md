# Command Injection Vulnerability Assessment Lab

An educational, local security testing project demonstrating command injection vulnerability detection, safe simulation mechanics, and remediation techniques.

## Project Overview

The project consists of two separate, decoupled local web applications:

1. **Scanner Application (`http://127.0.0.1:5000`)**: Cybersecurity dashboard and vulnerability assessment engine.
2. **Intentionally Vulnerable Target (`http://127.0.0.1:5001`)**: Educational target application ("Host Information Checker") with a safe simulation layer and remediation mode toggle.

```
                    SCANNER (Port 5000)
                             |
                             | Baseline request (google.com)
                             v
                      VULNERABLE TARGET (Port 5001)
                             |
                             v
                       Normal response
                             |
                             | Controlled test (google.com; whoami)
                             v
                      VULNERABLE TARGET (Port 5001)
                             |
                             v
                      Response analysis
                             |
                             v
                      SCANNER REPORT
```

---

## Safety & Security Design

- **Zero Host OS Execution**: Neither application invokes system shell execution (`os.system`, `subprocess(shell=True)`, `eval`, `exec`).
- **Safe Command Simulation**: The target application emulates command execution deterministically (`whoami`, `hostname`, `id`, `date`, `uptime`, `echo`) without touching the underlying host operating system.
- **Strict Target Constrains**: The scanner connects ONLY to local addresses (`127.0.0.1` / `localhost`) and blocks requests to external domains or public IPs.

---

## Project Structure

```
command-injection-assessment/
├── README.md
├── scanner/
│   ├── app.py
│   ├── scanner_engine.py
│   ├── README.md
│   ├── static/
│   │   └── style.css
│   └── templates/
│       └── index.html
└── vulnerable-target/
    ├── app.py
    ├── simulation.py
    ├── README.md
    ├── static/
    │   └── style.css
    └── templates/
        └── index.html
```

---

## Quick Start Guide

### Prerequisites
- Python 3.8+
- Flask (`pip install flask`)

### Step 1: Start the Target Application (Port 5001)
In a terminal, navigate to `vulnerable-target/` and run:
```bash
python app.py
```
Access the target UI at: `http://127.0.0.1:5001`

### Step 2: Start the Scanner Application (Port 5000)
In a second terminal, navigate to `scanner/` and run:
```bash
python app.py
```
Access the scanner UI at: `http://127.0.0.1:5000`

### Step 3: Run Assessment
1. Open `http://127.0.0.1:5000` in your web browser.
2. Enter target URL `http://127.0.0.1:5001` and click **Start Assessment**.
3. View the generated report, evidence breakdown, and remediation guidance.
4. Open `http://127.0.0.1:5001` in another tab, click **REMEDIATED** mode, and re-run the scanner to observe how strict input validation secures the application.
