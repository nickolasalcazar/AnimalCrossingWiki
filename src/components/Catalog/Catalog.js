import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetchGET";

import FurnitureFilter from "../../pages/Furniture/FurnitureFilter/FurnitureFilter";
import ItemFilter from "../ItemFilter/ItemFilter";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";

import "./Catalog.css";

const itemsPerPage = 30;

/**
 * The catalog component for all items.
 *
 * @param {String} catalogType  Specifies which catalog to render. Appropriate values:
 *                              ["villagers", "houseware", "fish", "bugs", "art"].
 */
export default function Catalog({ type = null }) {
  const { data, loading, error } = useFetch(`http://localhost:3000/${type}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [items, setItems] = useState([]);
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!loading) setItems(data);
  }, [data, loading, type]);

  return (
    <div className="catalog-wrapper">
      {error && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <p>There was an error loading data.</p>
          <p> Something went wrong on our end...</p>
        </div>
      )}
      {!error && loading && <LoadingSpinner />}
      {!error && !loading && (
        <div className="catalog">
          {/* Filter controls disabled for now */}
          {/* {type === "houseware" ? (
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
          )} */}
          {/* <ItemFilter filterType={type} items={items} setItems={setItems} /> */}
          <ItemFilter filterType={type} items={data} setItems={setItems} />
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
