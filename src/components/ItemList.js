import useFetchGET from "../hooks/useFetchGET";
import ItemCard from "./ItemCard";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/{housewareID}

    const {data: items, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    //console.log(Object.keys(items))


    return (
        <div className="item-list">

            {error && <p>Something went wrong...</p>}
            {isPending && <p>Loading...</p>}
            {!isPending && (
                Object.keys(items).map(item => (
                    <ItemCard key={ items[item][0]['internal-id'] } item={ items[item] } />
                ))
            )}
        </div>
    );
}
export default ItemList;
