import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import Furniture from "./pages/Furniture/Furniture";
import Villagers from "./pages/Villagers/Villagers";
import Bugs from "./pages/Bugs/Bugs";
import Fish from "./pages/Fish/Fish";
import Art from "./pages/Art/Art";

const CONFIG = require("./config.json");

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path={CONFIG.BASENAME + "/"} element={<Homepage />} />
        <Route path={CONFIG.BASENAME + "/furniture"} element={<Furniture />} />
        <Route path={CONFIG.BASENAME + "/villagers"} element={<Villagers />} />
        <Route path={CONFIG.BASENAME + "/bugs"} element={<Bugs />} />
        <Route path={CONFIG.BASENAME + "/fish"} element={<Fish />} />
        <Route path={CONFIG.BASENAME + "/art"} element={<Art />} />
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
