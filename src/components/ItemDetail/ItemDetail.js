import { useState } from "react";
import "./ItemDetail.css";

/**
 * Renders the details of an item.
 *
 * @param {Object}  item      Item to render.
 * @param {String}  itemType  The type of item being rendered.
 * @param {Array}   variants  An array containing variants of the item. Optional.
 */
export default function ItemDetail({ item, itemType, variants = null }) {
  const name = item.name;
  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <div className="item-detail-content">
        {itemType === "villagers" ? <VillagerDetails villager={item} /> : null}
        {itemType === "bugs" || itemType === "fish" ? (
          <BugsAndFishDetails critter={item} itemType={itemType} />
        ) : null}
        {itemType === "furniture" ? (
          <FurnitureDetails item={item} variants={variants} />
        ) : itemType === "art" ? (
          <ArtDetails artwork={item} />
        ) : null}
      </div>
    </div>
  );
}

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
      <MainImage src={villager.image_url} />
      <table>
        <tbody>
          <tr>
            <th>Species:</th>
            <td>{villager.species}</td>
          </tr>
          <tr>
            <th>Personality:</th>
            <td>{villager.personality}</td>
          </tr>
          <tr>
            <th>Catch phrase:</th>
            <td>{villager.quote}</td>
          </tr>
          <tr>
            <th>Birthday:</th>
            <td>{`${villager.birthday_month} ${villager.birthday_day}`}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{villager.gender}</td>
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
        {`${villager.name}'s personality is '${villager.personality}'. `}
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
      <MainImage src={critter.image_url} />
      <table>
        <tbody>
          <tr>
            <th>Price:</th>
            <td>{formatWithCommas(critter.sell_nook) + " bells"}</td>
          </tr>
          <tr>
            <th>{itemType === "bugs" ? "Flick Price:" : "C.J. Price:"}</th>
            <td>
              {itemType === "bugs"
                ? formatWithCommas(critter.sell_flick) + " bells"
                : formatWithCommas(critter.sell_cj) + " bells"}
            </td>
          </tr>
          <tr>
            <th>North:</th>
            <td>{`${critter.north.availability_array[0].months}, ${critter.north.availability_array[0].time}`}</td>
          </tr>
          <tr>
            <th>South:</th>
            <td>{`${critter.south.availability_array[0].months}, ${critter.south.availability_array[0].time}`}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Catch phrase:</th>
            <td>{critter.catchphrases[0]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Detailed Image</h3>
        <img className="detailed-img" src={critter.render_url} />
      </div>
    </div>
  );
}

function FurnitureDetails({ item, variants }) {
  const hasVariants = variants.length > 1;
  const [image, setImage] = useState(variants[0].image_url);
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
                key={`${item.name}-variant-${index}`}
                src={variant.image_url}
                onClick={() => {
                  setImage(variant.image_url);
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
          {item.buy.map((price) => (
            <tr>
              <th>{price.currency} price</th>
              <td>{formatWithCommas(price.price)}</td>
            </tr>
          ))}
          <tr>
            <th>Sell price</th>
            <td>{formatWithCommas(item.sell)}</td>
          </tr>
          <tr>
            <th>Source</th>
            <td>{item.availability[0].from}</td>
          </tr>
          <tr>
            <th>Customizable</th>
            <td>{item.customizable ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{item.category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ArtDetails({ artwork }) {
  return (
    <div className="artwork-details">
      <MainImage src={artwork.real_info.image_url} />
      <table>
        <tbody>
          <tr>
            <th>Buy Price:</th>
            <td>{formatWithCommas(artwork.buy) + " bells"}</td>
          </tr>
          <tr>
            <th>Sell Price:</th>
            <td>{formatWithCommas(artwork.sell) + " bells"}</td>
          </tr>
          <tr>
            <th>Has fake:</th>
            <td>{artwork.fake_info ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <div
        className="museum-description"
        style={{ backgroundImage: 'url("/assets/blathers.png")' }}
      >
        <h3>Museum Description</h3>
        <p>{artwork.real_info.description}</p>
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
