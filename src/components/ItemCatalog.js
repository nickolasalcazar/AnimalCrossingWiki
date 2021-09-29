import { useState, useEffect } from "react";
import useFetchGET from "../hooks/useFetchGET";

import ItemFilter from "./ItemFilter";
import Pagination from "./Pagination";
import ItemList from "./ItemList";

const ItemCatalog = () => {
    // API URL for fetching all items: http://acnhapi.com/v1/houseware/
    const {data, isPending, error} = useFetchGET('http://acnhapi.com/v1/houseware/');

    const [items, setItems] = useState([]);
    const [itemsT, setItemsT] = useState([]);   // New version of items

    const [itemsPerPage, /*setItemsPerPage*/] = useState(30);
    const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

    useEffect(() => {
        if (!isPending) setItems(Object.values(data)); // ORIGINAL

        if (!isPending) {
            let allItems = Object.values(data);
            // console.log(allItems);

            // For every item in allItems
            for (let i=0; i<allItems.length; i++) {
                let variants = [];

                // For every variant of that item
                for (let j=0; j<allItems[i].length; j++) {
                    let variant = allItems[i][j];

                    let obj = {
                        // 'Type': 'furniture',
                        'Buy Price': variant['buy-price'],
                        'Customizable Body': variant['canCustomizeBody'],
                        'Customizable Pattern': variant['canCustomizePattern'],
                        'Colors': [variant['color-1'], variant['color-2']],
                        'file-name': variant['file-name'],
                        'HHA Concepts': [variant['hha-concept-1'],
                            variant['hha-concept-2']],
                        'HHA Series': variant['hha-series'],
                        'HHA Set': variant['hha-set'],
                        'Image': variant['image_uri'],
                        'internal-id:': variant['internal_id'],
                        'Nook Catalog': variant['isCatalog'],
                        'DIY': variant['isDIY'],
                        'Interactive': variant['isInteractive'],
                        'Outdoor': variant['isOutdoor'],
                        'Kit Cost': variant['kit-cost'],
                        'Lighting Type': variant['lighting-type'],
                        'Name': variant['name']['name-USen'],
                        'Pattern': variant['pattern'],
                        'Pattern Title': variant['pattern-title'],
                        'Sell Price': variant['sell-price'],
                        'Size': variant['size'],
                        'Source': variant['source'],
                        'Source Detail': variant['source-detail'], // How to obtain
                        'Speaker': variant['speaker-type'],
                        'Tag': variant['tag'], // One word description
                        'Variant': variant['variant'], // Name of variant
                        'variant-id': variant['variant-id'],
                        'version': variant['version']
                    }
                    variants.push(obj);
                }
                // console.log(obj);

                // Now push variants to all items
                setItemsT(oldState => [...oldState, variants]);
            }
            // console.log(itemsT); // itemT works
        };
    }, [data, isPending]);

    return (
        <div className='item-catalog center-justify'>
            {error && <p>Something went wrong...</p>}
            {isPending && <p>Loading...</p>}
            { !isPending &&
                (<>
                    <h2 className="stylized-font">Item Catalog</h2>
                    <ItemFilter
                        //items={items} 
                        items={Object.values(data)}
                        setItems={setItems}
                    />
                    <Pagination 
                        numberOfItems={items.length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                        setLastItemIndex={setLastItemIndex}
                    />
                    <ItemList 
                        items={items}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                    />
                    <Pagination 
                        numberOfItems={items.length}
                        itemsPerPage={itemsPerPage}
                        lastItemIndex={lastItemIndex}
                        setLastItemIndex={setLastItemIndex}
                    />
                </>)
            }
        </div>
    );
}
export default ItemCatalog;