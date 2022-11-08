import { useEffect, useState } from "react";
import useFetchGET from "../../hooks/useFetchGET";

import Hero from "../../components/Hero/Hero";
// import ItemFilter from "./ItemFilter/ItemFilter";
import Pagination from "../../components/Pagination/Pagination";
import ItemList from "../../components/ItemList/ItemList";

import "./VillagerCatalog.css";

function Villagers() {
  // API URL for fetching all items: http://acnhapi.com/v1/villagers/
  const { data, isPending, error } = useFetchGET(
    "http://acnhapi.com/v1/villagers/"
  );

  const [items, setItems] = useState([]);
  const [itemsPerPage /*setItemsPerPage*/] = useState(30);
  const [lastItemIndex, setLastItemIndex] = useState(itemsPerPage);

  useEffect(() => {
    if (!isPending) setItems(Object.values(data));
  }, [data, isPending]);

  return (
    <main className="villager-catalog-wrapper">
      <Hero title="Villagers" image="/assets/wallpapers/villagers.jpg" />
      <div className="villager-catalog">
        {error && <p>Something went wrong...</p>}
        {isPending && <p>Loading...</p>}
        {!isPending && (
          <div>
            {/* <ItemFilter items={Object.values(data)} setItems={setItems} /> */}
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
}

export default Villagers;
