export default function DashboardGeral() {
    // Dados fake só para testar layout
    const classificacao = [
      { pos: 1, time: "Flamengo", pts: 40, v: 12, e: 4, d: 2 },
      { pos: 2, time: "Palmeiras", pts: 38, v: 11, e: 5, d: 2 },
      { pos: 3, time: "Cruzeiro", pts: 35, v: 10, e: 5, d: 3 },
    ];
  
    const jogos = [
      { mandante: "Bahia", golsMandante: 3, visitante: "Fluminense", golsVisitante: 3 },
      { mandante: "Flamengo", golsMandante: 2, visitante: "Mirassol", golsVisitante: 1 },
      { mandante: "Fortaleza", golsMandante: 0, visitante: "Botafogo", golsVisitante: 5 },
    ];
  
    const artilheiros = [
      { nome: "Kaio Jorge", gols: 13 },
      { nome: "Arrascaeta", gols: 10 },
      { nome: "Reinaldo", gols: 7 },
    ];
  
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Classificação */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2">
          <h2 className="text-lg font-bold text-green-400 mb-3">Classificação</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400">
                <th>#</th><th>Time</th><th>Pts</th><th>V</th><th>E</th><th>D</th>
              </tr>
            </thead>
            <tbody>
              {classificacao.map((t, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td>{t.pos}</td>
                  <td>{t.time}</td>
                  <td>{t.pts}</td>
                  <td>{t.v}</td>
                  <td>{t.e}</td>
                  <td>{t.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Artilheiros */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-lg font-bold text-green-400 mb-3">Artilheiros</h2>
          <ul>
            {artilheiros.map((a, i) => (
              <li key={i} className="flex justify-between">
                <span>{i + 1}. {a.nome}</span>
                <span className="text-green-400 font-bold">{a.gols}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Jogos da Rodada */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-3">
          <h2 className="text-lg font-bold text-green-400 mb-3">Jogos da Rodada</h2>
          <ul>
            {jogos.map((j, i) => (
              <li key={i} className="border-b border-gray-700 py-2">
                {j.mandante} {j.golsMandante} x {j.golsVisitante} {j.visitante}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  