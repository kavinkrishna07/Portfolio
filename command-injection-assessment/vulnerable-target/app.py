"""
Intentionally Vulnerable Target Application - Host Information Checker
Running on http://127.0.0.1:5001

SECURITY NOTICE:
This application is designed strictly for educational security lab testing.
It uses simulation.py to demonstrate command injection without running real OS commands.
"""

from flask import Flask, render_template, request, jsonify
from simulation import simulate_host_check, get_target_mode, set_target_mode

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", mode=get_target_mode())

@app.route("/check_host", methods=["POST"])
def check_host():
    data = request.get_json(silent=True) or request.form
    host_input = data.get("host", "").strip()
    
    result = simulate_host_check(host_input)
    return jsonify(result)

@app.route("/toggle_mode", methods=["POST"])
def toggle_mode():
    data = request.get_json(silent=True) or request.form
    new_mode = data.get("mode", "")
    
    if new_mode not in ["vulnerable", "remediated"]:
        # Toggle current mode
        new_mode = "remediated" if get_target_mode() == "vulnerable" else "vulnerable"
        
    set_target_mode(new_mode)
    return jsonify({
        "status": "success",
        "current_mode": get_target_mode(),
        "message": f"Target application mode changed to {get_target_mode().upper()}"
    })

@app.route("/api/status", methods=["GET"])
def api_status():
    return jsonify({
        "app": "Host Information Checker",
        "status": "online",
        "mode": get_target_mode(),
        "simulation_active": True
    })

if __name__ == "__main__":
    print("==================================================")
    print("   INTENTIONALLY VULNERABLE TARGET APPLICATION   ")
    print("   Educational Local Security Lab                ")
    print("   Running on http://127.0.0.1:5001              ")
    print("   Commands are SIMULATED (No real OS execution) ")
    print("==================================================")
    app.run(host="127.0.0.1", port=5001, debug=True)
