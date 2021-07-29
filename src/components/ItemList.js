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
                    //console.log(items[item][0]['name']['name-USen'])
                    <p key={items[item][0]['internal-id']}>{items[item][0]['name']['name-USen']}</p>
                ))
            )}
        </div>
    );
}
export default ItemList;
