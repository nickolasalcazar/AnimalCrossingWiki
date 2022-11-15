import { useEffect, useState } from "react";

import Collapsible from "../UI/Collapsible/Collapsible";
import ItemSearchBar from "../ItemSearchBar/ItemSearchBar";
import FilterButton from "../ItemFilter/FilterButton/FilterButton";

let filterConfig = require("./FilterConfig.json");

// const bugAvailabilityFilters = ["location", "rarity", "isAllYear"];

/**
 * Filters all non-houseware items suchs as Villagers, Bugs, Fish, Fossils, and Art.
 *
 * @param {String} filterType The type of filter to render. Acceptable values:
 *                            ["villagers", "bugs", "fish", "fossils", "art"].
 * @param {Object} items      Arrays of items to filter.
 * @param {Object} setItems   Function for setting items.
 * @returns
 */
function ItemFilter({ filterType = null, items, setItems }) {
  let filteredItems = items;
  const [query, setQuery] = useState("");

  // console.log("filteredItems = ", filteredItems);

  // Store the filter categories assocaited with ItemFilter filterType
  const categories = Object.keys(filterConfig[filterType]);
  console.log("Filter categories = ", categories);

  const filter = () => {
    filteredItems = items; // Array of objects
    // console.log("items = ", items);
    for (let i = 0; i < filteredItems.length; i++) {
      let item = items[i];
      // console.log("personality = ", item["personality"]);

      // Remove any items that do not match the query string
      if (!item["name"]["name-USen"].toLowerCase().includes(query)) {
        filteredItems.splice(filteredItems.indexOf(item), 1);
        i--;
        continue;
      }
    }
    setItems(filteredItems);
    document.getElementsByClassName("cycle-page-btn")[0].click(); // Return to first page of pagination
  };

  useEffect(() => {
    filter();
  }, [query]);

  return (
    <div className="filter">
      <Collapsible title="Search" disabled="true" loadOpen="true">
        <ItemSearchBar query={query} setQuery={setQuery} />
      </Collapsible>
      {categories.map((category) => {
        return (
          <Collapsible title={category}>
            {filterConfig[filterType][category].map((attribute) => (
              <FilterButton>{attribute}</FilterButton>
            ))}
          </Collapsible>
        );
      })}
    </div>
  );
}

export default ItemFilter;
