import Hero from "../../components/Hero/Hero";

import "./VillagerCatalog.css";

function Villagers() {
  return (
    <main className="villager-catalog-wrapper">
      <Hero title="Villagers" image="/assets/wallpapers/villagers.jpg" />
      <div className="villager-catalog"></div>
    </main>
  );
}

export default Villagers;
