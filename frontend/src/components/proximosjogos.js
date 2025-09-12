import React, { useEffect, useState } from "react";
import axios from "axios";

const ProximosJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/proximos-jogos")
      .then(res => setJogos(res.data))
      .catch(err => console.error("Erro ao buscar próximos jogos:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Próximos Jogos</h2>
      <div className="grid gap-4">
        {jogos.map((jogo, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <p className="text-gray-600 text-sm">
              Rodada {jogo.rodada} • {new Date(jogo.data).toLocaleDateString("pt-BR")} às {jogo.horario}
            </p>
            <p className="text-lg font-semibold">
              {jogo.time_mandante} 🆚 {jogo.time_visitante}
            </p>
            <p className="text-sm text-gray-500">{jogo.estadio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProximosJogos;
