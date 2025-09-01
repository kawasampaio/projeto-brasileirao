import React, { useEffect, useState } from "react";
import api from "../services/api";

const Classificacao = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    api.get("/classificacao").then((res) => {
      setTimes(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Classificação - Brasileirão 2025</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700 text-white text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2">#</th>
              <th className="p-2 text-left">Clube</th>
              <th className="p-2">Pts</th>
              <th className="p-2">PJ</th>
              <th className="p-2">VIT</th>
              <th className="p-2">E</th>
              <th className="p-2">DER</th>
              <th className="p-2">GM</th>
              <th className="p-2">GC</th>
              <th className="p-2">SG</th>
              <th className="p-2">Últimos 5</th>
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time.posicao} className="border-b border-gray-700 text-center">
                <td className="p-2">{time.posicao}</td>
                <td className="p-2 flex items-center gap-2">
                  <img src={time.escudo} alt={time.time} className="w-6 h-6" />
                  {time.time}
                </td>
                <td>{time.pontos}</td>
                <td>{time.jogos}</td>
                <td>{time.vitorias}</td>
                <td>{time.empates}</td>
                <td>{time.derrotas}</td>
                <td>{time.gm}</td>
                <td>{time.gc}</td>
                <td>{time.sg}</td>
                <td className="flex justify-center gap-1">
                  {time.ultimos5.map((res, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        res === "V"
                          ? "text-green-500"
                          : res === "E"
                          ? "text-gray-400"
                          : "text-red-500"
                      }`}
                    >
                      ●
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classificacao;
