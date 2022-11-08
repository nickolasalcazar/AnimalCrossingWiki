import "./ItemList.css";
import ItemCard from "../../../components/ItemCard/ItemCard";

const ItemList = ({ items, itemsPerPage, lastItemIndex }) => {
  return (
    <div className="item-list">
      <div className="item-list-content">
        {Object.values(items)
          .slice(lastItemIndex - itemsPerPage, lastItemIndex)
          .map((item) => (
            <ItemCard key={item[0]["internal-id"]} item={item} />
          ))}
      </div>
    </div>
  );
};
export default ItemList;
