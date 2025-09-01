// src/services/api.js
import axios from "axios";
const API_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: "http://localhost:5000", // endereço do Flask
});

export default api;


export async function getClassificacao() {
  const res = await fetch(`${API_URL}/classificacao`);
  return res.json();
}

export async function getJogos() {
  const res = await fetch(`${API_URL}/jogos`);
  return res.json();
}
