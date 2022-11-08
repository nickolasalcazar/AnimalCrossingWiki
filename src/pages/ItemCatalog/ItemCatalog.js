import { useState, useEffect } from "react";

import "./ItemCatalog.css";

import useFetchGET from "../../hooks/useFetchGET";

import ItemFilter from "./ItemFilter/ItemFilter";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";
import Hero from "../../components/Hero/Hero";

const ItemCatalog = () => {
  // API URL for fetching all items: http://acnhapi.com/v1/houseware/
  const { data, isPending, error } = useFetchGET(
    "http://acnhapi.com/v1/houseware/"
  );

  const [items, setItems] = useState([]);
  const [itemsPerPage /*setItemsPerPage*/] = useState(30);
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!isPending) setItems(Object.values(data));
  }, [data, isPending]);

  return (
    <main className="item-catalog-wrapper">
      <Hero title="Item Catalog" image="/assets/wallpapers/items.png" />
      <div className="item-catalog">
        {error && <p>Something went wrong...</p>}
        {isPending && <p>Loading...</p>}
        {!isPending && (
          <div>
            <ItemFilter items={Object.values(data)} setItems={setItems} />
            <Pagination
              totalNumberOfItems={items.length}
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
              totalNumberOfItems={items.length}
              itemsPerPage={itemsPerPage}
              lastItemIndex={lastItemIndex}
              setLastItemIndex={setLastItemIndex}
            />
          </div>
        )}
      </div>
    </main>
  );
};
export default ItemCatalog;
