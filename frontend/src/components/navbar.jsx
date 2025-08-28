import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-green-400">Brasileirão 2025</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-400">Início</Link>
        <Link to="/geral" className="hover:text-green-400">Geral</Link>
      </div>
    </nav>
  );
}
