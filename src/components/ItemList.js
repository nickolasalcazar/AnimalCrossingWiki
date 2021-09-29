import { useState } from "react";
import ItemCard from "./ItemCard";
import ItemSorter from "./ItemSorter";

const ItemList = ({ items, itemsPerPage, lastItemIndex }) => {
    let [sortBy, setSortBy] = useState(null);

    let compareBuyPrice = (a, b) => {
        if (a[0]['buy-price'] === null && b[0]['buy-price'] === null) {
            return 0;
        } else if (a[0]['buy-price'] === null) {
            return 1;
        } else if (b[0]['buy-price'] === null) {
            return -1;
        } else {
            if (a[0]['buy-price'] > b[0]['buy-price']) return -1
        }
        
    }

    // Sort by price
    items.sort(compareBuyPrice);

    return (
        <>
            <ItemSorter sortBy={sortBy} setSortBy={setSortBy}/>
            <div className="item-list">
                <div className="item-list-content">
                    {Object.values(items).slice(lastItemIndex-itemsPerPage, lastItemIndex).map(item => (
                        <ItemCard key={ item[0]['internal-id'] } item={ item }/>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ItemList;
