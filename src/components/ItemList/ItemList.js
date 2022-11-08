import "./ItemList.css";
import CardWrapper from "../UI/CardWrapper/CardWrapper";
import ItemCard from "../../pages/ItemCatalog/ItemCard/ItemCard";

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
const ItemList = ({ items, itemsPerPage, lastItemIndex }) => {
  // console.log("items****************\n", items);

  // ORIGINAL
  // return (
  //   <div className="item-list">
  //     <div className="item-list-content">
  //       {Object.values(items)
  //         .slice(lastItemIndex - itemsPerPage, lastItemIndex)
  //         .map((item) => (
  //           <ItemCard key={item[0]["internal-id"]} item={item} />
  //         ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="item-list">
      <div className="item-list-content">
        {Object.values(items)
          .slice(lastItemIndex - itemsPerPage, lastItemIndex)
          .map((item) => (
            <CardWrapper key={item[0]["internal-id"]}>
              <ItemCard item={item} />
            </CardWrapper>
          ))}
      </div>
    </div>
  );
};
export default ItemList;
