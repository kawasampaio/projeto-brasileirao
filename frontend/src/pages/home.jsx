import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-6">
        Dashboard Brasileirão 2025
      </h2>
      <p className="text-gray-300 mb-6">
        Acompanhe estatísticas, jogos e previsões do campeonato.
      </p>
      <Link
        to="/geral"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Acessar o Dashboard
      </Link>
    </div>
  );
}
