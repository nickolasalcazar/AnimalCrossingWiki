import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

import ItemCatalog from "./pages/ItemCatalog/ItemCatalog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemCatalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
