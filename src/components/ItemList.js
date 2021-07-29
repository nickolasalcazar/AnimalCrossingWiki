//import { useEffect, useState } from "react";
import { useState } from "react";
import useFetchGET from "../hooks/useFetchGET";
import ItemCard from "./ItemCard";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/{housewareID}

    const {data: items, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    // Number of elements to display at a time, elements slice(0, 10)
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [slice, setSlice] = useState(itemsPerPage);

    const handleStep = (step) => {
        if (step) {
            setSlice(slice+itemsPerPage);

        } else {
            setSlice(slice-itemsPerPage);
        }
    }

    return (
        <>
            {/* <div className="item-filter-settings">
                
            </div>
            <div className="items-per-page-settings">
                
            </div> */}
            <div className="item-list">
                {error && <p>Something went wrong...</p>}
                {isPending && <p>Loading...</p>}
                {!isPending && (
                    Object.keys(items).slice(slice-itemsPerPage,slice).map(item => (
                        <ItemCard key={ items[item][0]['internal-id'] } item={ items[item] } />
                    ))
                )}
                <button onClick={()=>handleStep(-1)}>Backward</button>
                <button onClick={()=>handleStep(1)}>Forward</button>
            </div>
        </>
    );
}
export default ItemList;
