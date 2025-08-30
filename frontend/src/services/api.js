// src/services/api.js
const API_URL = "http://localhost:5000";

export async function getClassificacao() {
  const res = await fetch(`${API_URL}/classificacao`);
  return res.json();
}

export async function getJogos() {
  const res = await fetch(`${API_URL}/jogos`);
  return res.json();
}
