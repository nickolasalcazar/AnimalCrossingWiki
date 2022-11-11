import { useEffect, useState } from "react";
import useFetchAll from "../../hooks/useFetchAll";

import FurnitureFilter from "../../pages/Furniture/FurnitureFilter/FurnitureFilter";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";

import "./Catalog.css";

/**
 * The catalog component for Villagers, Furniture, Bugs, and Fish. Is passed @param catalogType
 * that specifies which catalog to render.
 *
 * @param {String} catalogType  Specifies which catalog to render. Appropriate values:
 *                              ["villagers", "houseware", "fish", "bugs"].
 */
function Catalog({ type = null }) {
  const urls = [`http://acnhapi.com/v1/${type}/`];
  // If catalog is for fish, also fetch sea creatures
  if (type === "fish") urls.push("http://acnhapi.com/v1/sea/");

  const { data, loading, error } = useFetchAll(urls);
  const [items, setItems] = useState([]);
  const [itemsPerPage /*setItemsPerPage*/] = useState(30);
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!loading) {
      if (type === "fish") setItems(Object.values({ ...data[0], ...data[1] }));
      else setItems(Object.values(data[0]));
    }
  }, [data, loading, type]);

  return (
    <div className="catalog">
      {error && <p>Something went wrong...</p>}
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          {type === "houseware" && (
            <FurnitureFilter
              items={Object.values(data[0])}
              setItems={setItems}
            />
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
