import { useState } from "react";

const ItemCard = ({ item }) => {
    const [variantNmbr, setVariantNmbr] = useState(0);

    //console.log(item);
    return(
        <div className='item-card' key={item[variantNmbr]['internal-id']}>
            <p>{item[0]['name']['name-USen']}</p>
            <img src={item[variantNmbr]['image_uri']} alt='Furniture'></img>
            <p>Variant No. {variantNmbr}</p>

            <button onClick={() => {
                    if (item.length-1 === variantNmbr) setVariantNmbr(0);
                    else setVariantNmbr(variantNmbr+1);
                }}>Cycle Variants</button>
        </div>
    );
}
export default ItemCard;