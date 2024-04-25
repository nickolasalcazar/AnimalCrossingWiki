import { useEffect, useState } from "react";

import Collapsible from "../UI/Collapsible/Collapsible";
import ItemSearchBar from "../ItemSearchBar/ItemSearchBar";
import FilterButton from "../ItemFilter/FilterButton/FilterButton";

const filterConfig = require("./FilterConfig.json");
const months_key = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

/**
 * Filters all non-houseware items suchs as Villagers, Bugs, Fish, Fossils, and Art.
 *
 * @param {String} filterType The type of filter to render. Acceptable values:
 *                            ["villagers", "bugs", "fish", "fossils", "art"].
 * @param {Object} items      Arrays of items to filter.
 * @param {Object} setItems   Function for setting items.
 * @returns
 */
export default function ItemFilter({ filterType = null, items, setItems }) {
  const [query, setQuery] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({});

  // Store the filter categories of filterType
  const categories = Object.keys(filterConfig[filterType]);

  const filter = () => {
    let filteredItems = [...items]; // Array of objects
    // console.log(items);
    // console.log("items.length", items.length, ";", "query", `"${query}"`);
    // console.log("appliedFilters", appliedFilters);
    for (let i = 0; i < filteredItems.length; i++) {
      let item = filteredItems[i];

      // Remove items that do not include query string
      if (!item.name.toLowerCase().includes(query)) {
        filteredItems.splice(i, 1);
        i--;
        continue;
      }

      // Filter through categories
      if (filterType === "villagers") {
        for (let category in appliedFilters) {
          if (appliedFilters[category] === null) continue;
          if (item[category] !== appliedFilters[category]) {
            filteredItems.splice(i--, 1);
            break;
          }
        }
      }

      let fish_or_bug = filterType === "fish" || filterType === "bugs";

      if (fish_or_bug) {
        if (appliedFilters.availability === "isAllDay") {
          if (!item.north.availability_array[0].time.includes("All day")) {
            filteredItems.splice(i--, 1);
            continue;
          }
        } else if (appliedFilters.availability === "isAllYear") {
          if (!item.north.availability_array[0].months.includes("All year")) {
            filteredItems.splice(i--, 1);
            continue;
          }
        }
        if (appliedFilters["availability by month"] !== null) {
          let chosenMonth = appliedFilters["availability by month"];
          let key = months_key[chosenMonth];
          if (!item.north.months_array.includes(key)) {
            filteredItems.splice(i--, 1);
            continue;
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
