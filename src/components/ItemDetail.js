import { useState } from 'react';

const ItemDetail = ({item, show, onClose}) => {
    const [variantNmbr, setVariantNmbr] = useState(0);

    if (!show) return null;

    // Handles user clicking left / right, cycling through color variations of item
    const handleVariantBtnClick = (variant) => {
        let variantID = variant.target.currentSrc.slice(-3);
        for (let i=0; i<item.length; i++) {
            if (item[i]["variant-id"] === variantID) setVariantNmbr(i);
        }
    }

    return (
        <div className="item-detail-modal" id={item[variantNmbr]['internal-id']} onClick={onClose}>
            <div className="item-detail-modal-content" onClick={e=>e.stopPropagation()}>
                <span className="item-detail-modal-close" onClick={onClose}>&times;</span>

                <h3>{item[0]['Name'].charAt(0).toUpperCase() + item[0]['Name'].slice(1)}</h3>
                <div style={{float: 'left'}}>
                    <img src={item[variantNmbr]['Image']} alt='Furniture'></img>
                    {(item.length > 1) &&
                        <div>
                            <div className='item-detail-variations'>
                                {item.map(variant => 
                                    <img
                                        className='item-detail-variations-img clickable'
                                        key={variant['file-name']}
                                        src={variant['Image']}
                                        alt='Furniture'
                                        onClick={(variant)=>handleVariantBtnClick(variant)}
                                    ></img>
                                )}
                            </div>
                        </div>
                    }
                </div>
                <div className='item-detail-info'>
                    Details will go here
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;