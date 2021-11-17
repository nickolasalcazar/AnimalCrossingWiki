//import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import ItemCatalog from "./components/ItemCatalog";
import Footer from "./components/Footer";
import logo from "./media/CritterCatalogLogo.png";

function App() {
  return (
    <div className="App">
      <img className={"main-logo"} src={logo} alt="CritterCatalogLogo"></img>
      <NavBar />
      {/* <ItemList /> */}
      <ItemCatalog />
      <Footer />
    </div>
  );
}

export default App;
