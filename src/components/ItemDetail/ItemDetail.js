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
        <img className="item-detail-main-img" src={image} />
        {itemType === "villagers" ? <VillagerDetails villager={item} /> : null}
      </div>
    </div>
  );
};

function VillagerDetails({ villager }) {
  return (
    <div className="villager-details">
      <table>
        <tbody>
          <tr>
            <td>Species:</td>
            <td>{villager["species"]}</td>
          </tr>
          <tr>
            <td>Personality:</td>
            <td>{villager["personality"]}</td>
          </tr>
          <tr>
            <td>Catch phrase:</td>
            <td>{villager["catch-phrase"]}</td>
          </tr>
          <tr>
            <td>Birthday:</td>
            <td>{villager["birthday-string"]}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{villager["gender"]}</td>
          </tr>
        </tbody>
      </table>
      <div className="info">Info about specific personality.</div>
    </div>
  );
}

export default ItemDetail;
