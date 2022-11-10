import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import FurnitureCatalog from "./pages/FurnitureCatalog/FurnitureCatalog";
import VillagerCatalog from "./pages/VillagerCatalog/VillagerCatalog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/furniture" element={<FurnitureCatalog />} />
        <Route path="/villagers" element={<VillagerCatalog />} />
        <Route path="/critters" element={<h1>Critters</h1>} />
        <Route path="/art" element={<h1>Art</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
