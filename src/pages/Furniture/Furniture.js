import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Furniture(props) {
  return (
    <div>
      <Hero title="Furniture" />
      <Catalog type="houseware" />
    </div>
  );
}

export default Furniture;
