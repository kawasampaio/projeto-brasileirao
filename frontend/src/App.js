import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import DashboardGeral from "./pages/dashboardgeral";
import DashboardTime from "./pages/dashboardtime";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/geral" element={<DashboardGeral />} />
          <Route path="/time/:id" element={<DashboardTime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
