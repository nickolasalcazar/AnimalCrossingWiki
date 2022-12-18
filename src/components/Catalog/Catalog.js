import { useEffect, useState } from "react";
import useFetchAll from "../../hooks/useFetchAll";

import FurnitureFilter from "../../pages/Furniture/FurnitureFilter/FurnitureFilter";
import ItemFilter from "../ItemFilter/ItemFilter";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";

import "./Catalog.css";

/**
 * The catalog component for all items.
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
  const itemsPerPage = 30;
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!loading) setItems(Object.values({ ...data[0], ...data[1] }));
  }, [data, loading, type]);

  return (
    <div className="catalog-wrapper">
      {error && <p>Something went wrong...</p>}
      {loading && <LoadingSpinner />}
      {!loading && (
        <div className="catalog">
          {type === "houseware" ? (
            <FurnitureFilter
              items={Object.values(data[0])}
              setItems={setItems}
            />
          ) : (
            <ItemFilter
              filterType={type}
              items={Object.values({ ...data[0], ...data[1] })}
              setItems={setItems}
            />
          )}
          <div className="catalog-item-list">
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
              pageCounter={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
