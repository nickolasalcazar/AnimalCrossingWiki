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
  let name = item.name;
  let imgSrc = item.image_url;

  if (itemType === "art") {
    imgSrc = item.real_info?.image_url;
  } else if (itemType === "furniture") {
    // Does item.variations exist?
    if (!!item.variations) imgSrc = item?.variations[0].image_url;
  }

  return (
    <>
      <div className="item-card" style={style} onClick={() => setOpen(true)}>
        <div className="item-card-img-container">
          <img src={imgSrc} alt={name} className="main-img" />
        </div>
        <p>{name}</p>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <ItemDetail
          item={item}
          variants={item.variations}
          itemType={itemType}
        />
      </Modal>
    </>
  );
}
