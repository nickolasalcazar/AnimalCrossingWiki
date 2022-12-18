import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import Furniture from "./pages/Furniture/Furniture";
import Villagers from "./pages/Villagers/Villagers";
import Critters from "./pages/Critters/Critters";
import Bugs from "./pages/Bugs/Bugs";
import Fish from "./pages/Fish/Fish";
import Art from "./pages/Art/Art";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/villagers" element={<Villagers />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default App;
