import React, { useEffect, useState } from "react";
import api from "../services/api";

function DashboardGeral() {
  const [classificacao, setClassificacao] = useState([]);
  const [artilheiros, setArtilheiros] = useState([]);
  const [assistencias, setAssistencias] = useState([]);
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api.get("/classificacao").then((res) => {
      const standings = res.data[0]?.league?.standings[0] || [];
      setClassificacao(standings);
    });

    api.get("/artilheiros").then((res) => {
      setArtilheiros(res.data.slice(0, 3)); // só top 3
    });

    api.get("/assistencias").then((res) => {
      setAssistencias(res.data.slice(0, 3)); // só top 3
    });

    api.get("/jogos").then((res) => {
      setJogos(res.data.slice(0, 10)); // só alguns jogos
    });
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Artilheiros */}
      <div className="bg-gray-800 rounded-xl p-4 shadow">
        <h2 className="text-lg font-bold mb-2 text-green-400">Artilheiros</h2>
        <ul>
          {artilheiros.map((p, i) => (
            <li key={i} className="mb-2">
              {i + 1}. {p.player?.name || "Desconhecido"} - {p.statistics?.[0]?.goals?.total || 0} gols
            </li>
          ))}
        </ul>
      </div>

      {/* Assistências */}
      <div className="bg-gray-800 rounded-xl p-4 shadow">
        <h2 className="text-lg font-bold mb-2 text-green-400">Assistências</h2>
        <ul>
          {assistencias.map((p, i) => (
            <li key={i} className="mb-2">
              {i + 1}. {p.player?.name || "Desconhecido"} - {p.statistics?.[0]?.goals?.assists || 0} assistências
            </li>
          ))}
        </ul>
      </div>

      {/* Classificação */}
      <div className="bg-gray-800 rounded-xl p-4 shadow col-span-1 row-span-2">
        <h2 className="text-lg font-bold mb-2 text-green-400">Classificação</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-600">
              <th>#</th>
              <th>Time</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((t, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td>{t.rank}</td>
                <td>{t.team?.name}</td>
                <td>{t.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Jogos */}
      <div className="bg-gray-800 rounded-xl p-4 shadow col-span-2">
        <h2 className="text-lg font-bold mb-2 text-green-400">Jogos</h2>
        <ul>
          {jogos.map((j, i) => (
            <li key={i} className="mb-1">
              {j.teams?.home?.name} {j.goals?.home ?? 0} - {j.goals?.away ?? 0} {j.teams?.away?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardGeral;
