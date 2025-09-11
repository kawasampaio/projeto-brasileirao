from flask import Flask, jsonify
from flask_cors import CORS
import json
import os
import re


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
    tabela = []
    for i, time in enumerate(data["classificacao"], start=1):
        tabela.append({
            "posicao": i,
            "time": time["time"],
            "pontos": time["pontos"]
        })
    return jsonify(tabela)

@app.route("/artilheiros")
def artilheiros():
    jogadores = []
    for time in data["classificacao"]:
        if "artilheiro" in time and "Não informado" not in time["artilheiro"]:
            nome, gols = time["artilheiro"].split(" (")
            jogadores.append({
                "player": { "name": nome, "photo": "" },
                "statistics": [ { "goals": { "total": int(gols.replace(" gols)", "")) } } ]
            })
    jogadores.sort(key=lambda x: x["statistics"][0]["goals"]["total"], reverse=True)
    return jsonify(jogadores[:5])

@app.route("/assistencias")
def assistencias():
    jogadores = []
    for time in data["classificacao"]:
        if "principal_assistente" in time and "Não informado" not in time["principal_assistente"]:
            try:
                nome, assists = time["principal_assistente"].split(" (")
                numero = int(re.sub(r"\D", "", assists))  # pega só os dígitos
                jogadores.append({
                    "player": {"name": nome},
                    "statistics": [{"goals": {"assists": numero}}]
                })
            except Exception as e:
                print("Erro ao processar assistente:", time["principal_assistente"], e)

    jogadores.sort(key=lambda x: x["statistics"][0]["goals"]["assists"], reverse=True)
    return jsonify(jogadores[:5])

@app.route("/jogos")
def jogos():
    return jsonify(data.get("jogos", []))


@app.route("/estatisticas")
def estatisticas():
    return jsonify(data["estatisticas_gerais"])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
