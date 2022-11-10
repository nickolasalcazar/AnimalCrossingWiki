import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

function Bugs(props) {
  return (
    <main>
      <Hero title="Bugs" />
      <Catalog type="bugs" />
    </main>
  );
}

export default Bugs;
