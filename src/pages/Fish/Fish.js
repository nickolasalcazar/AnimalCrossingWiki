import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Fish(props) {
  return (
    <main>
      <Hero title="Fish" />
      <Catalog type="fish" />
    </main>
  );
}

export default Fish;
