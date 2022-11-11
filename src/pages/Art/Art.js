import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Art(props) {
  return (
    <main>
      <Hero title="Art" />
      <Catalog type="art" />
    </main>
  );
}

export default Art;
