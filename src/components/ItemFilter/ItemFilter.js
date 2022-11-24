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
  const [appliedFilters, setAppliedFilters] = useState({});

  // Store the filter categories of filterType
  const categories = Object.keys(filterConfig[filterType]);

  const filter = () => {
    filteredItems = items; // Array of objects
    for (let i = 0; i < filteredItems.length; i++) {
      let item = items[i];

      // Remove any items that do not match the query string
      if (!item["name"]["name-USen"].toLowerCase().includes(query)) {
        filteredItems.splice(filteredItems.indexOf(item), 1);
        i--;
        continue;
      }

      // Filter through categories
      if (filterType === "fish" || filterType === "bugs") {
        for (let category in appliedFilters) {
          if (appliedFilters[category] === null) continue;
          if (
            appliedFilters[category] === "isAllDay" ||
            appliedFilters[category] === "isAllYear"
          ) {
            if (item["availability"][appliedFilters[category]] === false) {
              filteredItems.splice(filteredItems.indexOf(item), 1);
              i--;
              break;
            }
          } else if (
            appliedFilters[category] !== item["availability"][category]
          ) {
            filteredItems.splice(filteredItems.indexOf(item), 1);
            i--;
            break;
          }
        }
      } else {
        for (let category in appliedFilters) {
          if (appliedFilters[category] === null) continue;
          if (appliedFilters[category] !== item[category]) {
            filteredItems.splice(filteredItems.indexOf(item), 1);
            i--;
            break;
          }
        }
      }
    }
    setItems(filteredItems);
    document.getElementsByClassName("cycle-page-btn")[0].click(); // Return to first page of pagination
  };

  useEffect(() => {
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, appliedFilters]);

  const handleFilterButtonOnClick = (category, attribute) => {
    if (appliedFilters[category] === attribute) {
      setAppliedFilters({
        ...appliedFilters,
        [category]: null,
      });
      return;
    }
    setAppliedFilters({
      ...appliedFilters,
      [category]: attribute,
    });
  };

  return (
    <div className="filter">
      <Collapsible title="Search" disabled="true" loadOpen="true">
        <ItemSearchBar query={query} setQuery={setQuery} />
      </Collapsible>
      {categories.map((category, index) => {
        return (
          <Collapsible title={capitalize(category)} key={"collapsible" + index}>
            {filterConfig[filterType][category].map((attribute, index) => (
              <FilterButton
                key={"filter-btn-" + index}
                appliedFilters={appliedFilters}
                category={category}
                attribute={attribute}
                onClick={() => handleFilterButtonOnClick(category, attribute)}
              >
                {attribute}
              </FilterButton>
            ))}
          </Collapsible>
        );
      })}
    </div>
  );
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default ItemFilter;
