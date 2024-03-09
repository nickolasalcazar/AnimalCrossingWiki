import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Modal from "../UI/Modal/Modal";
import "./ItemCard.css";

/**
 * A card for rendering the details of an item. A modal is displayed when clicked.
 *
 * @param {Object} item
 * @param {String} itemType
 * @param {Object} style
 */
export default function ItemCard({ item, itemType, style }) {
  const [open, setOpen] = useState(false);
  let variants;

  if (itemType === "housewares") {
    variants = item;
    item = item[0];
  }
  let name = item.name;

  return (
    <>
      <div className="item-card" style={style} onClick={() => setOpen(true)}>
        <img
          // src={item["icon_url"] ? item["icon_uri"] : item["image_uri"]}
          // src={item.image_url}
          src={itemType === "art" ? item.real_info.image_url : item.image_url}
          alt={name}
          className="main-img"
        />
        <p>{name}</p>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <ItemDetail item={item} variants={variants} itemType={itemType} />
      </Modal>
    </>
  );
}
