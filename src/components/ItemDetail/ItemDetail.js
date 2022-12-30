import { useState } from "react";
import "./ItemDetail.css";

/**
 * Renders the details of an item.
 *
 * @param {Object}  item      Item to render.
 * @param {String}  itemType  The type of item being rendered.
 * @param {Array}   variants  An array containing variants of the item. Optional.
 */
const ItemDetail = ({ item, itemType, variants = null }) => {
  const name = item["name"]["name-USen"];
  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <div className="item-detail-content">
        {itemType === "villagers" ? <VillagerDetails villager={item} /> : null}
        {itemType === "bugs" || itemType === "fish" ? (
          <BugsAndFishDetails critter={item} itemType={itemType} />
        ) : null}
        {itemType === "housewares" ? (
          <FurnitureDetails item={item} variants={variants ? variants : null} />
        ) : itemType === "art" ? (
          <ArtDetails artwork={item} />
        ) : null}
      </div>
    </div>
  );
};

function MainImage({ src }) {
  return (
    <div className="item-detail-main-img-wrapper">
      <img className="item-detail-main-img" src={src} />
    </div>
  );
}

function VillagerDetails({ villager }) {
  const personalityInfo = require("./personalities.json");
  return (
    <div className="villager-details">
      <MainImage src={villager["image_uri"]} />
      <table>
        <tbody>
          <tr>
            <th>Species:</th>
            <td>{villager["species"]}</td>
          </tr>
          <tr>
            <th>Personality:</th>
            <td>{villager["personality"]}</td>
          </tr>
          <tr>
            <th>Catch phrase:</th>
            <td>{villager["catch-phrase"]}</td>
          </tr>
          <tr>
            <th>Birthday:</th>
            <td>{villager["birthday-string"]}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{villager["gender"]}</td>
          </tr>
        </tbody>
      </table>
      <h3
        style={{
          alignSelf: "flex-start",
          fontFamily: "var(--stylized-font)",
          paddingLeft: "5%",
        }}
      >
        Personality
      </h3>
      <div className="info">
        {villager["name"]["name-USen"] +
          "'s personality is '" +
          villager["personality"] +
          "'. "}
        {personalityInfo[villager["personality"]]["description"]}
      </div>
      <div className="info">
        {personalityInfo[villager["personality"]]["interaction"]}
      </div>
    </div>
  );
}

function BugsAndFishDetails({ critter, itemType }) {
  return (
    <div className="critter-details">
      <MainImage src={critter["icon_uri"]} />
      <table>
        <tbody>
          <tr>
            <th>Price:</th>
            <td>{formatWithCommas(critter["price"]) + " bells"}</td>
          </tr>
          <tr>
            <th>{itemType === "bugs" ? "Flick Price:" : "C.J. Price:"}</th>
            <td>
              {itemType === "bugs"
                ? formatWithCommas(critter["price-flick"]) + " bells"
                : formatWithCommas(critter["price-cj"]) + " bells"}
            </td>
          </tr>
          <tr>
            <th>North:</th>
            <td>
              {critter["availability"]["month-northern"] === ""
                ? "Year-round"
                : critter["availability"]["month-northern"]}
            </td>
          </tr>
          <tr>
            <th>South:</th>
            <td>
              {critter["availability"]["month-southern"] === ""
                ? "Year-round"
                : critter["availability"]["month-southern"]}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="museum-description"
        style={{ backgroundImage: 'url("/assets/blathers.png")' }}
      >
        <h3>Blathers' Description</h3>
        <p>"{critter["museum-phrase"]}"</p>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Catch phrase:</th>
            <td>{critter["catch-phrase"]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Detailed Image</h3>
        <img className="detailed-img" src={critter["image_uri"]} />
      </div>
    </div>
  );
}

function FurnitureDetails({ item, variants }) {
  const hasVariants = variants.length > 1;
  const hhaConcepts = [item["hha-concept-1"], item["hha-concept-2"]];
  const [image, setImage] = useState(item["image_uri"]);
  return (
    <div className="furniture-details">
      <MainImage src={image} />
      {hasVariants ? (
        <div className="variants-container-wrapper">
          {variants.length > 3 ? (
            <span className="scroll-arrow left">&#10094;</span>
          ) : null}
          <div className="variants-container">
            {variants.map((variant, index) => (
              <img
                key={index}
                src={variant["image_uri"]}
                onClick={() => {
                  setImage(variant["image_uri"]);
                }}
              />
            ))}
          </div>
          {variants.length > 3 ? (
            <span className="scroll-arrow right">&#10095;</span>
          ) : null}
        </div>
      ) : null}
      <table>
        <tbody className="info-table">
          <tr>
            <th>Buy Price</th>
            <td>
              {item["buy-price"]
                ? formatWithCommas(item["buy-price"]) + " bells"
                : "N/A"}
            </td>
          </tr>
          <tr>
            <th>Sell Price</th>
            <td>{formatWithCommas(item["sell-price"])} bells</td>
          </tr>
          {item["miles-price"] ? (
            <tr>
              <th>Miles Price</th>
              <td>{formatWithCommas(item["miles-price"])} bells</td>
            </tr>
          ) : null}
          <tr>
            <th>Source</th>
            <td>{item["source"]}</td>
          </tr>
          <tr>
            <th>DIY</th>
            <td>{item["isDIY"] ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <th>Catalog</th>
            <td>{item["isCatalog"] ? "Available" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <table className="info-table">
        <tr>
          <th>Size</th>
          <td>{item["size"]}</td>
        </tr>
        <tr>
          <th>HHA Concepts</th>
          <td>
            {hhaConcepts.map((concept, index) => {
              if (concept === null) return "";
              else if (index === 0) return concept;
              else return ", " + concept;
            })}
          </td>
        </tr>
        {item["hha-series"] ? (
          <tr>
            <th>HHA Series</th>
            <td>{item["hha-series"]}</td>
          </tr>
        ) : null}
        {item["hha-set"] ? (
          <tr>
            <th>HHA Set</th>
            <td>{item["hha-set"]}</td>
          </tr>
        ) : null}
        <tr>
          <th>Customize Body</th>
          <td>{item["canCustomizeBody"] ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <th>Patterns</th>
          <td>{item["canCustomizePattern"] ? "Yes" : "No"}</td>
        </tr>
      </table>
      {item["source-detail"] ? (
        <div className="info">
          <p>{item["source-detail"]}</p>
        </div>
      ) : null}
    </div>
  );
}

function ArtDetails({ artwork }) {
  return (
    <div className="artwork-details">
      <MainImage src={artwork["image_uri"]} />
      <table>
        <tbody>
          <tr>
            <th>Buy Price:</th>
            <td>{formatWithCommas(artwork["buy-price"]) + " bells"}</td>
          </tr>
          <tr>
            <th>Sell Price:</th>
            <td>{formatWithCommas(artwork["sell-price"]) + " bells"}</td>
          </tr>
          <tr>
            <th>Has fake:</th>
            <td>{artwork["hasFake"] ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <div
        className="museum-description"
        style={{ backgroundImage: 'url("/assets/blathers.png")' }}
      >
        <h3>Museum Description</h3>
        <p>{artwork["museum-desc"]}</p>
      </div>
    </div>
  );
}

/**
 * Formats a number to a string with commas. E.g. 1000 -> 1,000
 * @param {number} num
 * @returns
 */
const formatWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default ItemDetail;
