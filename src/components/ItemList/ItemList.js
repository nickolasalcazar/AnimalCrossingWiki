import "./ItemList.css";
import CardWrapper from "../UI/CardWrapper/CardWrapper";
import ItemCard from "../../pages/Furniture/FurnitureCard/FurnitureCard";
import VillagerCard from "../../pages/Villagers/VillagerCard/VillagerCard";
import BugCard from "../../pages/Bugs/BugCard";
import FishCard from "../../pages/Fish/FishCard";
import ArtCard from "../../pages/Art/ArtCard";

/**
 * A component that maps items to individual ItemCard components.
 *
 * @param {String} listType       The type of list. This parameter controls how the data of 'items' is mapped to
 *                                ItemCard components. Acceptable values: ["items", "villagers", "critters", "art"].
 * @param {Object} items          An object containing data that is to be displayed in ItemCard. An array of a given
 *                                object's own enumerable property values is mapped to an individual ItemCard
 *                                component.
 * @param {Number} itemsPerPage   The number of items to be displayed at once.
 * @param {Number} lastItemIndex  The last element to display.
 */
const ItemList = ({ listType, items, itemsPerPage, lastItemIndex }) => {
  if (items.length === 0) {
    return (
      <div className="item-list">
        <div className="item-list-content no-items">
          <h3>What are you lookin' for?</h3>
          <img src="assets/mr-resetti.png" className="mr-resetti" />
          <h3>I couldn't find it!</h3>
          <p>How about expanding your search?</p>
        </div>
      </div>
    );
  }
  return (
    <div className="item-list">
      <div className="item-list-content">
        {listType === "houseware" &&
          Object.values(items)
            .slice(lastItemIndex - itemsPerPage, lastItemIndex)
            .map((item) => (
              <CardWrapper key={item[0]["internal-id"]}>
                <ItemCard item={item} />
              </CardWrapper>
            ))}
        {listType === "villagers" &&
          Object.values(items)
            .slice(lastItemIndex - itemsPerPage, lastItemIndex)
            .map((villager) => (
              <CardWrapper
                key={villager["id"]}
                style={{ backgroundColor: `${villager["bubble-color"]}AA` }}
              >
                <VillagerCard villager={villager} />
              </CardWrapper>
            ))}
        {listType === "fish" &&
          Object.values(items)
            .slice(lastItemIndex - itemsPerPage, lastItemIndex)
            .map((fish, index) => (
              <CardWrapper key={index}>
                <FishCard fish={fish} />
              </CardWrapper>
            ))}
        {listType === "bugs" &&
          Object.values(items)
            .slice(lastItemIndex - itemsPerPage, lastItemIndex)
            .map((bug) => (
              <CardWrapper key={bug["id"]}>
                <BugCard bug={bug} />
              </CardWrapper>
            ))}
        {listType === "art" &&
          Object.values(items)
            .slice(lastItemIndex - itemsPerPage, lastItemIndex)
            .map((artwork) => (
              <CardWrapper key={artwork["id"]}>
                <ArtCard artwork={artwork} />
              </CardWrapper>
            ))}
      </div>
    </div>
  );
};
export default ItemList;
