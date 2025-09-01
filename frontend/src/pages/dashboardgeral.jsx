import React, { useEffect, useState } from "react";
import api from "../services/api";

function DashboardGeral() {
  const [classificacao, setClassificacao] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/classificacao");
        setClassificacao(response.data);
      } catch (error) {
        console.error("Erro ao buscar classificação:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Classificação - Brasileirão 2025</h2>
      <table className="w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 p-2">Posição</th>
            <th className="border border-gray-600 p-2">Time</th>
            <th className="border border-gray-600 p-2">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-600 p-2">{item.posicao}</td>
              <td className="border border-gray-600 p-2">{item.time}</td>
              <td className="border border-gray-600 p-2">{item.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardGeral;
