from flask import Flask, request
import os, json, datetime

app = Flask(__name__)

LOG_PATH = "logs/activity.log"

os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)

@app.route("/log", methods=["POST"])
def log():
    data = request.get_json(force=True)
    entry = {
        "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
        "ip": request.remote_addr,
        **data
    }
    with open(LOG_PATH, "a") as f:
        f.write(json.dumps(entry) + "\n")
    return "", 204

@app.route("/")
def home():
    return "Observer logger online.", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)