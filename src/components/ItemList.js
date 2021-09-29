import ItemCard from "./ItemCard";

const ItemList = ({ items, itemsPerPage, lastItemIndex }) => {
    // Should be working correctly
    return (
        <div className="item-list">
            <div className="item-list-content">
                {Object.values(items).slice(lastItemIndex-itemsPerPage, lastItemIndex).map(item => (
                    <ItemCard key={ item[0]['file-name'] } item={ item }/>
                ))}
            </div>
        </div>
    );
}
export default ItemList;
