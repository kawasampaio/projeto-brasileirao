from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Caminho para o JSON local
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(BASE_DIR, "dados.json")

# Carrega o JSON
with open(JSON_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)["campeonato_brasileiro_serie_a_2025"]

@app.route("/classificacao")
def classificacao():
    return jsonify(data["classificacao"])

@app.route("/artilheiros")
def artilheiros():
    jogadores = []
    for time in data["classificacao"]:
        if "principal_artilheiro" in time and "Não informado" not in time["principal_artilheiro"]:
            nome, gols = time["principal_artilheiro"].split(" (")

            # Normaliza o valor, removendo singular e plural
            valor_limpo = (
                gols.replace(" gols)", "")
                    .replace(" gol)", "")
                    .strip()
            )

            jogadores.append({
                "nome": nome,
                "gols": int(valor_limpo) if valor_limpo.isdigit() else 0
            })

    # Ordena por gols
    jogadores.sort(key=lambda x: x["gols"], reverse=True)

    return jsonify(jogadores[:5])


@app.route("/assistencias")
def assistencias():
    # Pega top 5 assistentes dos times
    jogadores = []
    for time in data["classificacao"]:
        if "principal_assistente" in time and "Não informado" not in time["principal_assistente"]:
            nome, assists = time["principal_assistente"].split(" (")

            # Normaliza o valor, removendo singular e plural
            valor_limpo = (
                assists.replace(" assistências)", "")
                       .replace(" assistência)", "")
                       .strip()
            )

            jogadores.append({
                "nome": nome,
                "assistencias": int(valor_limpo) if valor_limpo.isdigit() else 0
            })

    # Ordena por assistências
    jogadores.sort(key=lambda x: x["assistencias"], reverse=True)

    return jsonify(jogadores[:5])


@app.route("/jogos")
def jogos():
    return jsonify(data["proximos_jogos"])

@app.route("/estatisticas")
def estatisticas():
    return jsonify(data["estatisticas_gerais"])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
