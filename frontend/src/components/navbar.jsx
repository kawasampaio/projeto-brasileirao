import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-green-500 text-lg font-bold">Brasileirão 2025</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-green-400">Início</Link>
        <Link to="/dashboardgeral" className="hover:text-green-400">Geral</Link>
        <Link to="/dashboardtime" className="hover:text-green-400">Estatísticas de Time</Link>
      </div>
    </nav>
  );
}
