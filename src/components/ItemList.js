import { useEffect, useState } from "react";
//import useFetchGET from "../hooks/useFetchGET";
import ItemCard from "./ItemCard";
//import Pagination from "./Pagination";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/{housewareID}
    //const {data:items, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    const [items, setItems] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>
        fetch('http://acnhapi.com/v1/houseware/')
            .then(response => {
                if (!response.ok) throw new Error('Error:', response.status, response.statusText);
                return response.json()
            })
            .then(data => {
                const items = Object.values(data).map(i=>new Object(i)); /* This WORKS! */
                console.log('items', items);
                console.log('items[0]', items[0]);
                setIsPending(false);
                setError(null);
            })
            .catch(e => {
                setError(true);
                setIsPending(false);
                console.log(e);
            })
    ,[]);

    const [itemsPerPage, setItemsPerPage] = useState(30);
    const [slice, setSlice] = useState(itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handleStep = (step) => {
        if (step === 1) {
            setSlice(slice+itemsPerPage);
            setCurrentPage(currentPage+1);
        } else if (step === -1) {
            setSlice(slice-itemsPerPage);
            setCurrentPage(currentPage-1);
        }
    }

    return (
        <>
            <div className="item-list">
                {error && <p>Something went wrong...</p>}
                {isPending && <p>Loading...</p>}
                {!isPending && (
                    //Object.keys(items).slice(slice-itemsPerPage,slice).map(item => (
                    items.slice(slice-itemsPerPage, slice).map(item => (
                        <ItemCard key={ items[0]['internal-id'] } item={ item } />
                        //<ItemCard key={1} item={ items[item] } />
                    ))
                )}





                {/* First page */}
                <button onClick={()=>{
                    setCurrentPage(1);
                    setSlice(itemsPerPage);
                }}>First page</button>
                {/* Backward */}
                <button onClick={()=>handleStep(-1)}>Backward</button>
                {/* Forward */}
                <button onClick={()=>handleStep(1)}>Forward</button>
                {/* Last page */}
                <button onClick={()=>{
                    setCurrentPage(Math.ceil(Object.keys(items).length / itemsPerPage));
                    setSlice(itemsPerPage*Math.ceil(Object.keys(items).length / itemsPerPage))
                }}>Last page</button>
                {/* Page number */}
                {!isPending &&
                    <p>Page {currentPage} of {Math.ceil(Object.keys(items).length / itemsPerPage)}</p>
                }
            </div>
        </>
    );
}
export default ItemList;
