// src/pages/home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">
        Dashboard Brasileirão 2025
      </h1>
      <p className="text-gray-300 mb-6">
        Acompanhe estatísticas, jogos e previsões do campeonato.
      </p>
      <button
        onClick={() => navigate("/dashboardgeral")}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Acessar o Dashboard
      </button>
    </div>
  );
}
