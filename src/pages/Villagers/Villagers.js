import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Villagers(props) {
  return (
    <div>
      <Hero title="Villagers" image="assets/wallpapers/villagers.jpg" />
      <Catalog type="villagers" />
    </div>
  );
}

export default Villagers;
