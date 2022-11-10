import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Villagers(props) {
  return (
    <div>
      <Hero title="Villagers" />
      <Catalog type="villagers" />
    </div>
  );
}

export default Villagers;
