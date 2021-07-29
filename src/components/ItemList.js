import useFetchGET from "../hooks/useFetchGET";

const ItemList = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/{housewareID}

    const {data: items, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    //for (const item in items) console.log(item[0]['name']['name-USen'])

    return (
        <div className="item-list">

            {isPending && <p>Loading...</p>}
            {!isPending && (
                // Loop through items here
                <></>
            )
            && console.log(items)
            }
        </div>
    );
}
export default ItemList;
