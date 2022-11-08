import React from "react";

function VillagerCard({ villager }) {
  return (
    <div className="villager-card">
      <img src={villager["icon_uri"]} />
      <h3>{villager["name"]["name-USen"]}</h3>
    </div>
  );
}

export default VillagerCard;
