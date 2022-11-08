import { useState } from "react";

// import "./ItemCard.css";
import "./ItemCard-dev.css";

import ItemDetail from "../../../components/ItemDetail/ItemDetail";

/**
 * Renders an arrow button for cycling through furniture variants, and handle its onClick event.
 *
 * @param {String} direction        Direction the arrow button points.
 * @param {Number} numberOfVariants Number of variants that belong to the item.
 * @param {String} variantNmbr      The number, or 'id', of the current variant that is displayed.
 * @param {String} setVariantNmbr   Set the current variantNmbr.
 */
const VariantBtn = ({
  direction,
  numberOfVariants,
  variantNmbr,
  setVariantNmbr,
}) => {
  const handleClick = (e) => {
    if (direction === "right") {
      if (variantNmbr === numberOfVariants - 1) return;
      setVariantNmbr(variantNmbr + 1);
    } else {
      if (variantNmbr === 0) return;
      setVariantNmbr(variantNmbr - 1);
    }
  };
  if (!direction) return <></>;
  if (direction === "left" && variantNmbr === 0) return <></>;
  if (direction === "right" && variantNmbr === numberOfVariants - 1)
    return <></>;
  return (
    <div
      className={`variant-btn variant-btn-${direction}`}
      onClick={() => handleClick()}
    >
      {direction === "left" ? "‹" : "›"}
    </div>
  );
};

/**
 * Renders the details of @param item in a CardWrapper component. Only renders furniture items.
 * Opens a modal containing more details about the item when interacted with by the user.
 *
 * @param {Array} item The item to be rendered.
 */
const ItemCard = ({ item }) => {
  const [variantNmbr, setVariantNmbr] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="item-card" key={item[variantNmbr]["internal-id"]}>
        <img
          src={item[variantNmbr]["image_uri"]}
          alt="Furniture"
          onClick={() => setShowModal(true)}
          className="clickable"
        ></img>

        {item.length !== 1 && (
          <span
            className="no-select clickable"
            onClick={(e) => e.stopPropagation()}
          >
            <VariantBtn
              direction="left"
              numberOfVariants={item.length}
              variantNmbr={variantNmbr}
              setVariantNmbr={setVariantNmbr}
            />
            <VariantBtn
              direction="right"
              numberOfVariants={item.length}
              variantNmbr={variantNmbr}
              setVariantNmbr={setVariantNmbr}
            />
          </span>
        )}

        <div className="item-label">
          <p className={"clickable"} onClick={() => setShowModal(true)}>
            {item[0]["name"]["name-USen"].charAt(0).toUpperCase() +
              item[0]["name"]["name-USen"].slice(1)}
          </p>

          <p style={{ fontSize: "10pt" }}>{item[0]["source"]}</p>
          {item[0]["buy-price"] && (
            <p style={{ fontSize: "9pt", paddingTop: "8px" }}>
              {item[0]["buy-price"]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              bells
            </p>
          )}
        </div>
      </div>
      <ItemDetail
        item={item}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
export default ItemCard;
