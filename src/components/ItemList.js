import ItemCard from "./ItemCard";

const ItemList = ({ items, itemsPerPage, lastItemIndex }) => {
    return (
        <>
            <div className="item-list">
                {Object.values(items).slice(lastItemIndex-itemsPerPage, lastItemIndex).map(item => (
                    <ItemCard key={ item[0]['internal-id'] } item={ item }/>
                ))}
            </div>
        </>
    );
}
export default ItemList;
