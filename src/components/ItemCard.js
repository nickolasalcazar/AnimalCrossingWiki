const ItemCard = ({ item }) => {
    return(
        <div className='item-card' key={item[0]['internal-id']}>
            <p>{item[0]['name']['name-USen']}</p>
            <img src={item[0]['image_uri']} alt='Furniture'></img>
        </div>
    );
}
export default ItemCard;