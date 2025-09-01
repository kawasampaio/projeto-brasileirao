import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboardtime";
import Classificacao from "./pages/classificacao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classificacao" element={<Classificacao />} />
      </Routes>
    </Router>
  );
}

export default App;
