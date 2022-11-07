//import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import ItemCatalog from "./components/ItemCatalog";
import Footer from "./components/Footer";
import logo from "./media/CritterCatalogLogo.png";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img className={"main-logo"} src={logo} alt="CritterCatalogLogo"></img>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemCatalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
