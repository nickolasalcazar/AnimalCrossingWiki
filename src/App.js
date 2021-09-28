//import ItemList from "./components/ItemList";
import ItemCatalog from "./components/ItemCatalog";
import NavBar from "./components/NavBar";
import logo from "./media/CritterCatalogLogo.png";

function App() {
  return (
    <div className="App">
      <img className={"main-logo"} src={logo} alt="CritterCatalogLogo"></img>
      <NavBar />
      {/* <ItemList /> */}
      <ItemCatalog />
    </div>
  );
}

export default App;
