import useFetchGET from "../hooks/useFetchGET";

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
                    // Will be turned into its own ItemCard.js component
                    <div className='item-card' key={items[item][0]['internal-id']}>
                        <p>{items[item][0]['name']['name-USen']}</p>
                        <img src={items[item][0]['image_uri']} alt='Furniture'></img>
                    </div>
                ))
            )}
        </div>
    );
}
export default ItemList;
