import { useEffect, useState } from "react";
import api from "../services/api";

export default function Classificacao() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/classificacao"); 
        setTimes(response.data);
      } catch (error) {
        console.error("Erro ao buscar classificação:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-green-500 mb-4">
        Classificação - Brasileirão 2025
      </h2>
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-left">Posição</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="px-4 py-2">{time.posicao}</td>
              <td className="px-4 py-2">{time.nome}</td>
              <td className="px-4 py-2">{time.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
