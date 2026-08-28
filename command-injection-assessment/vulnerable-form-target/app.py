"""
Intentionally Vulnerable Form Target Application - Contact & Feedback Form
Running on http://127.0.0.1:5002

SECURITY NOTICE:
This application is designed strictly for educational security lab testing.
It uses simulation.py to demonstrate form-based command injection without running real OS commands.
"""

from flask import Flask, render_template, request, jsonify
from simulation import simulate_form_submission, get_target_mode, set_target_mode

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", mode=get_target_mode())

@app.route("/submit_form", methods=["POST"])
def submit_form():
    data = request.get_json(silent=True) or request.form
    name_input = data.get("name", "").strip()
    subject_input = data.get("subject", "").strip()
    
    result = simulate_form_submission(name_input, subject_input)
    return jsonify(result)

# Endpoint for scanner compatibility (checks either field for host/input)
@app.route("/check_host", methods=["POST"])
def check_host_compatibility():
    data = request.get_json(silent=True) or request.form
    raw_input = data.get("host", "") or data.get("subject", "") or data.get("name", "")
    result = simulate_form_submission(name_input="John Doe", subject_input=raw_input)
    return jsonify(result)

@app.route("/toggle_mode", methods=["POST"])
def toggle_mode():
    data = request.get_json(silent=True) or request.form
    new_mode = data.get("mode", "")
    
    if new_mode not in ["vulnerable", "remediated"]:
        new_mode = "remediated" if get_target_mode() == "vulnerable" else "vulnerable"
        
    set_target_mode(new_mode)
    return jsonify({
        "status": "success",
        "current_mode": get_target_mode(),
        "message": f"Target form application mode changed to {get_target_mode().upper()}"
    })

@app.route("/api/status", methods=["GET"])
def api_status():
    return jsonify({
        "app": "Form Contact & Feedback Target",
        "status": "online",
        "mode": get_target_mode(),
        "port": 5002,
        "simulation_active": True
    })

if __name__ == "__main__":
    print("==================================================")
    print("   INTENTIONALLY VULNERABLE FORM TARGET (Port 5002)")
    print("   Educational Local Security Lab                 ")
    print("   Running on http://127.0.0.1:5002               ")
    print("   Commands are SIMULATED (No real OS execution)  ")
    print("==================================================")
    app.run(host="127.0.0.1", port=5002, debug=True)
