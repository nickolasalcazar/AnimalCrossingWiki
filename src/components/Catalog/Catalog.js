import { useEffect, useState } from "react";
import useFetchGET from "../../hooks/useFetchGET";

import FurnitureFilter from "../../pages/Furniture/FurnitureFilter/FurnitureFilter";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";

import "./Catalog.css";

/**
 * The catalog component for Villagers, Furniture, Bugs, and Fish. Is passed @param catalogType
 * that specifies which catalog to render.
 *
 * @param {String} catalogType  Specifies which catalog to render. Appropriate values:
 *                              ["villagers", "furniture", "fish", "bugs"].
 */
function Catalog({ type = null }) {
  // API URL for fetching all items: `http://acnhapi.com/v1/${type}/`
  const { data, isPending, error } = useFetchGET(
    `http://acnhapi.com/v1/${type}/`
  );

  const [items, setItems] = useState([]);
  const [itemsPerPage /*setItemsPerPage*/] = useState(30);
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!isPending) setItems(Object.values(data));
  }, [data, isPending]);

  return (
    <div className="catalog">
      {error && <p>Something went wrong...</p>}
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <div>
          {type === "houseware" && (
            <FurnitureFilter items={Object.values(data)} setItems={setItems} />
          )}
          <Pagination
            totalNumberOfItems={items.length}
            itemsPerPage={itemsPerPage}
            lastItemIndex={lastItemIndex}
            setLastItemIndex={setLastItemIndex}
          />
          <ItemList
            listType={type}
            items={items}
            itemsPerPage={itemsPerPage}
            lastItemIndex={lastItemIndex}
          />
          <Pagination
            totalNumberOfItems={items.length}
            itemsPerPage={itemsPerPage}
            lastItemIndex={lastItemIndex}
            setLastItemIndex={setLastItemIndex}
          />
        </div>
      )}
    </div>
  );
}

export default Catalog;
