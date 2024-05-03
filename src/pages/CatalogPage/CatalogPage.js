import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "../../components/Hero/Hero";

/**
 *  Renders a catalog depending on the 'type' that is passed in. For example, if 'villager' is passed, then the villagers catalog will be rendered.
 *
 * @param {*} type    The type of catalog to display. Appropriate values: ["villagers", "furniture", etc.]
 * @returns
 */
export default function CatalogPage({ type }) {
  let heroImg =
    type === "villagers"
      ? "assets/wallpapers/villagers.jpg"
      : "/assets/wallpapers/items.png";
  return (
    <div>
      <Hero title={type[0].toUpperCase() + type.slice(1)} image={heroImg} />
      <Catalog type={type} />
    </div>
  );
}
