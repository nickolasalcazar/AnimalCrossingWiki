import { useState } from 'react';

const ItemDetail = ({item}) => {
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

    return (
        <div className="item-detail-overlay">

            <h4>{item[0]['name']['name-USen'].charAt(0).toUpperCase() + item[0]['name']['name-USen'].slice(1)}</h4>

            <img src={item[variantNmbr]['image_uri']} alt='Furniture' style={{width: '200px', height: 'auto'}}></img>
            
            {(item.length > 1) &&
                item.map(variation => 
                    <img 
                        key={variation['file-name']}
                        src={variation['image_uri']}
                        alt='Furniture' 
                        style={{width: '100px', height: 'auto'}}
                        onClick={(e)=>handleVariantBtnClick(e)}
                    >    
                    </img>
                )
            }

        </div>
    );
}
export default ItemDetail;