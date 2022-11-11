import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// import FurnitureCatalog from "./pages/FurnitureCatalog/FurnitureCatalog";
// import VillagerCatalog from "./pages/VillagerCatalog/VillagerCatalog";
import Critters from "./pages/Critters/Critters";
// import BugCatalog from "./pages/BugCatalog/BugCatalog.js";

import Catalog from "./components/Catalog/Catalog.js";

// TESTING
import Furniture from "./pages/Furniture/Furniture";
import Villagers from "./pages/Villagers/Villagers";
import Bugs from "./pages/Bugs/Bugs";
import Fish from "./pages/Fish/Fish";
import Art from "./pages/Art/Art";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />

        <Route path="/furniture" element={<Furniture />} />
        <Route path="/villagers" element={<Villagers />} />

        <Route path="/critters" element={<Critters />} />
        <Route path="/critters/bugs" element={<Bugs />} />
        <Route path="/critters/fish" element={<Fish />} />

        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
