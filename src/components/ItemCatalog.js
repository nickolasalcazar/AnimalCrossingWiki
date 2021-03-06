import { useState, useEffect } from "react";
import useFetchGET from "../hooks/useFetchGET";

import ItemFilter from "./ItemFilter";
import Pagination from "./Pagination";
import ItemList from "./ItemList";

const ItemCatalog = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/
    const {data, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    const [items, setItems] = useState([]);
    const [itemsPerPage, /*setItemsPerPage*/] = useState(30);
    const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

    useEffect(() => {
        if (!isPending) setItems(Object.values(data));
    }, [data, isPending]);

    return (
        <div className='item-catalog center-justify'>
            {error && <p>Something went wrong...</p>}
            {isPending && <p>Loading...</p>}
            { !isPending &&
                (<>
                    <h2 className="stylized-font">Item Catalog</h2>
                    <ItemFilter items={Object.values(data)} setItems={setItems}
                    />
                    <Pagination 
                        numberOfItems={items.length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                        setLastItemIndex={setLastItemIndex}
                    />
                    <ItemList 
                        items={items}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                    />
                    <Pagination 
                        numberOfItems={items.length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                        setLastItemIndex={setLastItemIndex}
                    />
                </>)
            }
        </div>
    );
}
export default ItemCatalog;