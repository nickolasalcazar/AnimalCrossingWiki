import { useEffect, useState } from "react";
import useFetchGET from "../hooks/useFetchGET";
import ItemFilter from "./ItemFilter";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/
    
    const {data, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    const [items, setItems] = useState([]);
    const [itemsPerPage/*, setItemsPerPage*/] = useState(30);
    const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

    useEffect(() => {
        console.log('ItemList.js -- useEffect')
        if (!isPending) setItems(Object.values(data));
    }, [data, isPending]);

    return (
        <>
            <div className="item-list">
                
                {error && <p>Something went wrong...</p>}
                {isPending && <p>Loading...</p>}

                {!isPending && <ItemFilter items={items} setItems={setItems}/>}
                {!isPending && 
                    (Object.values(items).slice(lastItemIndex-itemsPerPage, lastItemIndex).map(item => (
                        <ItemCard key={ item[0]['internal-id'] } item={ item }/>
                    )))
                }
                
                {!isPending &&
                    <Pagination
                        numberOfItems={Object.keys(items).length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex} // Potential bug: total number of items is less than lastItemIndex after filter applied
                        setLastItemIndex={setLastItemIndex}
                    />
                }
            </div>
        </>
    );
}
export default ItemList;
