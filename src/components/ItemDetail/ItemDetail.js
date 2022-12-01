import "./ItemDetail.css";

/**
 * Renders the details of an item.
 *
 * @param {Object}  item      Item to render.
 * @param {String}  itemType  The type of item being rendered.
 * @param {Array}   variants  An array containing variants of the item. Optional.
 */
const ItemDetail = ({ item, itemType, variants = undefined }) => {
  const name = item["name"]["name-USen"];
  const icon = item["icon_uri"];
  // const image = item["image_uri"] ? item["image_uri"] : undefined;
  const image = item["image_uri"];

  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <div className="item-detail-content">
        {itemType === "villagers" ? <VillagerDetails villager={item} /> : null}
        {itemType === "bugs" || itemType === "fish" ? (
          <BugsAndFishDetails critter={item} />
        ) : null}
      </div>
    </div>
  );
};

function MainImage({ src }) {
  return <img className="item-detail-main-img" src={src} />;
}

function VillagerDetails({ villager }) {
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
      <div className="info">
        Info about specific personality. Info about specific personality. Info
        about specific personality. Info about specific personality. Info about
        specific personality.
      </div>
    </div>
  );
}

function BugsAndFishDetails({ critter }) {
  return (
    <div className="critter-details">
      <MainImage src={critter["icon_uri"]} />
      <div className="availability">
        <h3>Availability</h3>
        <table>
          <tbody>
            <tr>
              <th>Northern Hemisphere:</th>
              <td>
                {critter["availability"]["month-northern"] === ""
                  ? "Year-round"
                  : critter["availability"]["month-northern"]}
              </td>
            </tr>
            <tr>
              <th>Southern Hemisphere:</th>
              <td>
                {critter["availability"]["month-southern"] === ""
                  ? "Year-round"
                  : critter["availability"]["month-southern"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="museum-description">
        <h3>Museum Description</h3>
        <p className="info">{critter["museum-phrase"]}</p>
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
        <h3>Relative Size</h3>
        <img className="relative-size-img" src={critter["image_uri"]} />
      </div>
    </div>
  );
}

export default ItemDetail;
