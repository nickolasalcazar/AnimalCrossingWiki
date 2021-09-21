import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [variantNmbr, setVariantNmbr] = useState(0);

    // Get the modal
    //let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //let btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    //let span = document.getElementsByClassName("close")[0]; // Problematic

    // When the user clicks on the button, open the modal
    //btn.onclick = () => modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    //span.onclick = () => modal.style.display = "none";


    // When the user clicks anywhere outside of the modal, close it
    //window.onclick = (e) => {
    //    if (e.target === modal) modal.style.display = "none";
    //}

    // Handles user clicking left / right, cycling through color variations of item
    const handleVariantBtnClick = (variant) => {
        let variantID = variant.target.currentSrc.slice(-3);
        for (let i=0; i<item.length; i++) {
            if (item[i]["variant-id"] === variantID) setVariantNmbr(i);
        }
    }

    const itemDetailModal = document.getElementById(item[variantNmbr]['internal-id']);

    return (
        <div className="item-detail-modal" id={item[variantNmbr]['internal-id']}>
            <div className="item-detail-modal-content">
                <span className="item-detail-modal-close" onClick={()=>itemDetailModal.style.display="none"}>&times;</span>

                <h3>{item[0]['name']['name-USen'].charAt(0).toUpperCase() + item[0]['name']['name-USen'].slice(1)}</h3>
                <div style={{float: 'left'}}>
                    <img 
                        src={item[variantNmbr]['image_uri']} alt='Furniture' 
                    ></img>
                    {(item.length > 1) &&
                        <div className='item-detail-variations'>
                            {item.map(variant => 
                                <img
                                    className='item-detail-variations-img'
                                    key={variant['file-name']}
                                    src={variant['image_uri']}
                                    alt='Furniture'
                                    onClick={(variant)=>handleVariantBtnClick(variant)}
                                ></img>
                            )}
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