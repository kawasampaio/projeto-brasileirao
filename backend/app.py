from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = "a718cca065c1340cdb917e5cb7a2e439"
HEADERS = {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": API_KEY
}
BASE_URL = "https://api-football-v1.p.rapidapi.com/v3"

@app.route("/classificacao")
def classificacao():
    tabela = [
        {
            "posicao": 1,
            "time": "Flamengo",
            "escudo": "https://upload.wikimedia.org/wikipedia/pt/2/2e/Clube_de_Regatas_do_Flamengo_logo.png",
            "pontos": 47,
            "jogos": 21,
            "vitorias": 14,
            "empates": 5,
            "derrotas": 2,
            "gm": 45,
            "gc": 10,
            "sg": 35,
            "ultimos5": ["V", "V", "E", "V", "V"]
        },
        {
            "posicao": 2,
            "time": "Cruzeiro",
            "escudo": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cruzeiro_Esporte_Clube_logo.png",
            "pontos": 44,
            "jogos": 22,
            "vitorias": 13,
            "empates": 5,
            "derrotas": 4,
            "gm": 35,
            "gc": 15,
            "sg": 20,
            "ultimos5": ["V", "D", "V", "V", "E"]
        },
        {
            "posicao": 3,
            "time": "Palmeiras",
            "escudo": "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.png",
            "pontos": 43,
            "jogos": 20,
            "vitorias": 13,
            "empates": 4,
            "derrotas": 3,
            "gm": 28,
            "gc": 16,
            "sg": 12,
            "ultimos5": ["V", "V", "V", "E", "D"]
        }
    ]
    return jsonify(tabela)

@app.route("/jogos")
def jogos():
    url = f"{BASE_URL}/fixtures?league=71&season=2025"
    res = requests.get(url, headers=HEADERS)
    return jsonify(res.json())

if __name__ == "__main__":
    app.run(debug=True, port=5000)
