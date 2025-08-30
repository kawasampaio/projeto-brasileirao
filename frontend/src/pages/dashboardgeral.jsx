import React, { useEffect, useState } from "react";
import { getClassificacao } from "../services/api";

function DashboardGeral() {
  const [tabela, setTabela] = useState([]);

  useEffect(() => {
    getClassificacao().then(data => {
      if (data.response && data.response[0].league.standings) {
        setTabela(data.response[0].league.standings[0]);
      }
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Classificação - Brasileirão 2025</h2>
      <table className="table-auto w-full border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2">Posição</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((time, i) => (
            <tr key={time.team.id} className="border-t border-gray-700">
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2">{time.team.name}</td>
              <td className="px-4 py-2">{time.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardGeral;
