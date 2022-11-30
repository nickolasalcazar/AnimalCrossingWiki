import { useState } from "react";

import "./ItemDetail.css";

/**
 * Renders the details of an item.
 *
 * @param {Object}  item      Item to render.
 * @param {String}  itemType  The type of item being rendered.
 * @param {Array}   variants  An array containing variants of the item. Optional.
 */
const ItemDetail = ({ item, itemType, variants = undefined }) => {
  let name = item["name"]["name-USen"];

  return (
    <div className="item-detail">
      <h2>{name}</h2>
    </div>
  );
};
export default ItemDetail;
