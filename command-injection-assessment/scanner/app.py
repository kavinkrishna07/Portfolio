"""
Command Injection Scanner Application
Running on http://127.0.0.1:5000

SECURITY NOTICE:
This application performs safe, controlled vulnerability assessments exclusively against local targets.
It contains safety checks preventing scanning external websites or remote infrastructure.
"""

from flask import Flask, render_template, request, jsonify
from scanner_engine import run_assessment, is_local_target

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/scan", methods=["POST"])
def scan():
    data = request.get_json(silent=True) or request.form
    target_url = data.get("target_url", "").strip()

    if not target_url:
        return jsonify({
            "status": "error",
            "message": "Target URL is required. Example: http://127.0.0.1:5001"
        }), 400

    # Ensure URL protocol prefix is present
    if not target_url.startswith("http://") and not target_url.startswith("https://"):
        target_url = "http://" + target_url

    report = run_assessment(target_url)
    return jsonify(report)

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "app": "Command Injection Vulnerability Scanner",
        "status": "online",
        "port": 5000,
        "mode": "Educational Safety Constrained"
    })

if __name__ == "__main__":
    print("==================================================")
    print("   COMMAND INJECTION VULNERABILITY SCANNER        ")
    print("   Educational Local Security Lab                 ")
    print("   Running on http://127.0.0.1:5000               ")
    print("   Restricted strictly to 127.0.0.1 / localhost   ")
    print("==================================================")
    app.run(host="127.0.0.1", port=5000, debug=True)
