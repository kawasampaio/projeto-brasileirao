import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import DashboardGeral from "./pages/dashboardgeral";
import DashboardTime from "./pages/dashboardtime";
import Classificacao from "./pages/classificacao";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />  {/* Navbar sempre visível */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboardgeral" element={<DashboardGeral />} />
          <Route path="/dashboardtime" element={<DashboardTime />} />
          <Route path="/classificacao" element={<Classificacao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
