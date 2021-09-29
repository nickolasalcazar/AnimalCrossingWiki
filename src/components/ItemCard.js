import { useState } from "react";
import ItemDetail from "./ItemDetail";

// param: item - an item array containing all of the variants of the item
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

    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div 
                className='item-card stylized-font clickable'
                key={item[variantNmbr]['internal-id']} 
                onClick={()=>setShowModal(true)}>            
                <img src={item[variantNmbr]['Image']} 
                    alt='Furniture' className="clickable">
                </img>

                {(item.length !== 1) &&
                    (<span className="no-select clickable" onClick={e=>e.stopPropagation()}>
                        <>
                            {(variantNmbr !== 0) &&
                                <div onClick={(e)=>handleVariantBtnClick(e)}
                                    className='variation-btn variation-btn-left'>&lsaquo;</div>
                            }
                        </>
                        <>
                            {(variantNmbr !== item.length-1) &&
                                <div onClick={(e)=>handleVariantBtnClick(e)} 
                                    className='variation-btn variation-btn-right'>&rsaquo;</div>}
                        </>
                    </span>)
                }

                <div className='item-label'>
                    <p className={"clickable"} onClick={()=>setShowModal(true)}>
                        {item[0]['Name'].charAt(0).toUpperCase()+item[0]['Name'].slice(1)}
                    </p>
                    <p style={{fontSize: "10pt"}}>
                        {item[0]['Source']}
                    </p>
                    {item[0]['Buy Price'] && 
                        <p style={{fontSize: "9pt", paddingTop: "8px"}}>
                            {item[0]['Buy Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} bells
                        </p>
                    }
                </div>
            </div>
            <ItemDetail item={item} show={showModal} onClose={()=>setShowModal(false)}/>
        </>
    );
}
export default ItemCard;