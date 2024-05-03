import "./ItemList.css";
import CardWrapper from "../UI/CardWrapper/CardWrapper";
import ItemCard from "../ItemCard/ItemCard";

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
export default function ItemList({
  listType,
  items,
  itemsPerPage,
  lastItemIndex,
}) {
  if (items.length === 0) {
    return (
      <div className="item-list">
        <div className="item-list-content no-items">
          <h3>What are you lookin' for?</h3>
          <img
            src="/assets/mr-resetti.png"
            alt="mr-resetti"
            className="mr-resetti"
          />
          <h3>I couldn't find it!</h3>
          <p>How about expanding your search?</p>
        </div>
      </div>
    );
  }
  return (
    <div className="item-list">
      <div className="item-list-content">
        {Object.values(items)
          .slice(lastItemIndex - itemsPerPage, lastItemIndex)
          .map((item, index) => (
            <CardWrapper
              key={index}
              style={{
                backgroundColor:
                  listType === "villagers"
                    ? `#${item.title_color}AA`
                    : "transparent",
              }}
            >
              <ItemCard item={item} itemType={listType} />
            </CardWrapper>
          ))}
      </div>
    </div>
  );
}
