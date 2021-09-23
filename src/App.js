//import ItemList from "./components/ItemList";
import ItemCatalog from "./components/ItemCatalog";
import logo from "./media/CritterCatalogLogo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="CritterCatalogLogo"></img>
      {/* <ItemList /> */}
      <ItemCatalog />
    </div>
  );
}

export default App;
