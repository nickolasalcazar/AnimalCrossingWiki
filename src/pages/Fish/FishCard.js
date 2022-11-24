import React from "react";

function FishCard({ fish }) {
  return (
    <div className="fish-card">
      <img src={fish["icon_uri"]} alt={fish["name"]["name-USen"]} />
      <p>{fish["name"]["name-USen"]}</p>
    </div>
  );
}

export default FishCard;
