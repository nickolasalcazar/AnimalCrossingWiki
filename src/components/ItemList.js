import { useState } from "react";
import ItemCard from "./ItemCard";
import ItemSorter from "./ItemSorter";

import { useEffect } from "react";

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

    let compareSellPrice = (a, b) => {
        if (a[0]['sell-price'] === null && b[0]['sell-price'] === null) {
            return 0;
        } else if (a[0]['sell-price'] === null) {
            return 1;
        } else if (b[0]['sell-price'] === null) {
            return -1;
        } else {
            if (a[0]['sell-price'] > b[0]['sell-price']) return -1
        }
    }
    
    let handleSetSortBy = (option) => {
        setSortBy(option);
    }

    // This useEffect listens for changes to sortBy
    useEffect(() => {
        if (sortBy === "Buy Price") {
            items.sort(compareBuyPrice);
        } else if (sortBy === "Sell Price") {
            items.sort(compareSellPrice);
        }
    }, [items, sortBy]);

    return (
        <>
            <ItemSorter sortBy={sortBy} handleSetSortBy={handleSetSortBy}/>
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
