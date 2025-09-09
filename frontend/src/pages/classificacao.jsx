import React, { useEffect, useState } from "react";
import api from "../services/api";

function Classificacao() {
  const [tabela, setTabela] = useState([]);

  useEffect(() => {
    api.get("/classificacao")
      .then((res) => {
        if (res.data.length > 0) {
          setTabela(res.data[0].league.standings[0]); // acessa standings
        }
      })
      .catch((err) => console.error("Erro ao carregar classificação:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tabela do Brasileirão 2025</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Pos</th>
            <th className="p-2">Time</th>
            <th className="p-2">Pts</th>
            <th className="p-2">Vit</th>
            <th className="p-2">Emp</th>
            <th className="p-2">Der</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((time, index) => (
            <tr key={index} className="text-center border-t">
              <td className="p-2">{time.rank}</td>
              <td className="p-2 flex items-center gap-2">
                <img src={time.team.logo} alt={time.team.name} className="w-6 h-6" />
                {time.team.name}
              </td>
              <td className="p-2">{time.points}</td>
              <td className="p-2">{time.all.win}</td>
              <td className="p-2">{time.all.draw}</td>
              <td className="p-2">{time.all.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classificacao;
