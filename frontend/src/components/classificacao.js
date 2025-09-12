import React, { useEffect, useState } from "react";
import axios from "axios";

const Classificacao = () => {
  const [classificacao, setClassificacao] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/classificacao")
      .then(res => setClassificacao(res.data))
      .catch(err => console.error("Erro ao buscar classificação:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Classificação</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Pos</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-center">Pts</th>
              <th className="p-2 text-center">J</th>
              <th className="p-2 text-center">V</th>
              <th className="p-2 text-center">E</th>
              <th className="p-2 text-center">D</th>
              <th className="p-2 text-center">GP</th>
              <th className="p-2 text-center">GC</th>
              <th className="p-2 text-center">SG</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((time, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2">{time.posicao}</td>
                <td className="p-2 font-semibold">{time.time}</td>
                <td className="p-2 text-center">{time.pontos}</td>
                <td className="p-2 text-center">{time.jogos}</td>
                <td className="p-2 text-center">{time.vitorias}</td>
                <td className="p-2 text-center">{time.empates}</td>
                <td className="p-2 text-center">{time.derrotas}</td>
                <td className="p-2 text-center">{time.gols_pro}</td>
                <td className="p-2 text-center">{time.gols_contra}</td>
                <td className="p-2 text-center">{time.saldo_gols}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classificacao;
