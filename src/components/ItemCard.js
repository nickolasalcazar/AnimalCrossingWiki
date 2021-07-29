import { useState } from "react";

const ItemCard = ({ item }) => {
    const [variantNmbr, setVariantNmbr] = useState(0);

    //console.log(item);
    return(
        <div className='item-card' key={item[variantNmbr]['internal-id']}>            
            <img src={item[variantNmbr]['image_uri']} alt='Furniture'></img>
            <p>{item[variantNmbr]['variant']}</p>
            <div className='item-label'>
                <p>{item[0]['name']['name-USen'].charAt(0).toUpperCase() + item[0]['name']['name-USen'].slice(1)}</p>
                <p style={{fontSize: "10pt"}}>{item[0]['source']}</p>
                {item[0]['buy-price'] && 
                    <p style={{fontSize: "9pt", paddingTop: "8px"}}>
                        {item[0]['buy-price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} bells
                    </p>
                }
            </div>

            {/* Cycling through color variants with button */}
            { (item.length !== 1) &&
                <button onClick={() => {
                    if (item.length-1 === variantNmbr) setVariantNmbr(0);
                    else setVariantNmbr(variantNmbr+1);
                }}>Cycle Variants</button>}
        </div>
    );
}
export default ItemCard;