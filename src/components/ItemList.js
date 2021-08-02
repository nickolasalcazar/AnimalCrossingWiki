import { useState } from "react";
import useFetchGET from "../hooks/useFetchGET";
import ItemFilter from "./ItemFilter";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/
    
    const {data: items, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    const [itemsPerPage/*, setItemsPerPage*/] = useState(30);
    const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

    return (
        <>
            <ItemFilter />
            <div className="item-list">
                {error && <p>Something went wrong...</p>}
                {isPending && <p>Loading...</p>}
                {!isPending && (
                    Object.values(items).slice(lastItemIndex-itemsPerPage, lastItemIndex).map(item => (
                        <ItemCard key={ item[0]['internal-id'] } item={ item }/>
                    ))
                )}
                
                {!isPending &&
                    <Pagination
                        numberOfItems={Object.keys(items).length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                        setLastItemIndex={setLastItemIndex}
                    />
                }
            </div>
        </>
    );
}
export default ItemList;
