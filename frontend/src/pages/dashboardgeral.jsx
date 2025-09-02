import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardGeral() {
  const [classificacao, setClassificacao] = useState([]);
  const [artilheiros, setArtilheiros] = useState([]);
  const [assistencias, setAssistencias] = useState([]);
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [classRes, jogosRes, artRes, assisRes] = await Promise.all([
          axios.get("http://localhost:5000/classificacao"),
          axios.get("http://localhost:5000/jogos"),
          axios.get("http://localhost:5000/artilheiros"),
          axios.get("http://localhost:5000/assistencias"),
        ]);
  
        setClassificacao(classRes.data);
        setJogos(jogosRes.data); // agora é um array
        setArtilheiros(artRes.data);
        setAssistencias(assisRes.data);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Brasileirão 2025</h1>

      {/* Top section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Artilheiros */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold text-green-400 mb-3">Artilheiros</h2>
          <ul>
            {artilheiros.map((jogador, i) => (
              <li key={i} className="flex justify-between">
                <span>{i + 1}. {jogador.nome}</span>
                <span className="font-bold">{jogador.gols}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Assistências */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold text-green-400 mb-3">Assistências</h2>
          <ul>
            {assistencias.map((jogador, i) => (
              <li key={i} className="flex justify-between">
                <span>{i + 1}. {jogador.nome}</span>
                <span className="font-bold">{jogador.assistencias}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Jogos */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold text-green-400 mb-3">Jogos</h2>
          <ul>
            {jogos.map((jogo, i) => (
              <li key={i} className="flex justify-between border-b border-gray-700 py-1">
                <span>{jogo.mandante} {jogo.gols_mandante} - {jogo.gols_visitante} {jogo.visitante}</span>
                <span className="text-gray-400">{jogo.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Classificação */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-green-400 mb-4">Classificação</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2">Pos</th>
              <th className="text-left">Time</th>
              <th className="text-center">Pts</th>
              <th className="text-center">J</th>
              <th className="text-center">V</th>
              <th className="text-center">E</th>
              <th className="text-center">D</th>
              <th className="text-center">GP</th>
              <th className="text-center">GC</th>
              <th className="text-center">SG</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((time, i) => (
              <tr key={i} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-2">{i + 1}</td>
                <td>{time.nome}</td>
                <td className="text-center font-bold">{time.pontos}</td>
                <td className="text-center">{time.jogos}</td>
                <td className="text-center">{time.vitorias}</td>
                <td className="text-center">{time.empates}</td>
                <td className="text-center">{time.derrotas}</td>
                <td className="text-center">{time.gols_pro}</td>
                <td className="text-center">{time.gols_contra}</td>
                <td className="text-center">{time.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
