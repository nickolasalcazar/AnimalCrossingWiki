import React from "react";
import "./ItemCard.css";

/**
 * A component for a generic item, excluding furniture items.
 *
 * @param {Object} item
 * @param {String} itemType Optional
 */
function ItemCard({ item, itemType, style }) {
  return (
    <div className="item-card" style={style}>
      <img
        src={item["icon_uri"] ? item["icon_uri"] : item["image_uri"]}
        alt={item["name"]["name-USen"]}
        className="main-img"
      />
      <p>{item["name"]["name-USen"]}</p>
    </div>
  );
}

export default ItemCard;
