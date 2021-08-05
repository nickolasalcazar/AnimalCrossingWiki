import { useState } from "react";

const ItemCard = ({ item }) => {
    const [variantNmbr, setVariantNmbr] = useState(0);

    // Handles user clicking left / right, cycling through color variations of item
    const handleVariantBtnClick = (e) => {
        if (e.target.classList.contains('variation-btn-right')) {
            if (variantNmbr === item.length-1) return;
            setVariantNmbr(variantNmbr+1);
        } else {
            if (variantNmbr === 0) return;
            setVariantNmbr(variantNmbr-1);
        }
    }
    return(
        <>
            <div className='item-card' key={item[variantNmbr]['internal-id']}>            
                <img src={item[variantNmbr]['image_uri']} alt='Furniture'></img>

                {(item.length !== 1) &&
                    (<>
                        <div onClick={(e)=>handleVariantBtnClick(e)} className='variation-btn variation-btn-left'>L</div>
                        <div onClick={(e)=>handleVariantBtnClick(e)} className='variation-btn variation-btn-right'>R</div>
                    </>)
                }

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
            </div>
        </>
    );
}
export default ItemCard;