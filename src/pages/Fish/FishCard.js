import React from "react";

function FishCard({ fish }) {
  return (
    <div className="fish-card">
      <img src={fish["icon_uri"]} />
      <p>{fish["name"]["name-USen"]}</p>
    </div>
  );
}

export default FishCard;
