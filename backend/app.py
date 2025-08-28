from flask import Flask, jsonify
import requests

app = Flask(__name__)

API_KEY = "a718cca065c1340cdb917e5cb7a2e439"
HEADERS = {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": API_KEY
}
BASE_URL = "https://api-football-v1.p.rapidapi.com/v3"

@app.route("/classificacao")
def classificacao():
    url = f"{BASE_URL}/standings?league=71&season=2025"
    res = requests.get(url, headers=HEADERS)
    return jsonify(res.json())

@app.route("/jogos")
def jogos():
    url = f"{BASE_URL}/fixtures?league=71&season=2025"
    res = requests.get(url, headers=HEADERS)
    return jsonify(res.json())

if __name__ == "__main__":
    app.run(debug=True)
