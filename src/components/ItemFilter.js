// Possibly move this array to its own file along with other related content
const themes = ["bathroom",
    "child's room",
    "concert",
    "den",
    "expensive",
    "facility",
    "fancy",
    "fitness",
    "folk art",
    "freezing cold",
    "garage",
    "garden",
    "horror",
    "kitchen",
    "living room",
    "music",
    "ocean",
    "office",
    "outdoors",
    "outdoorsy",
    "party",
    "school",
    "shop",
    "space",
    "sporty",
    "vacation",
    "work",
    "zen-style"];

let appliedFilters = {
    "boolean-filters": {
        "isDIY": null,
        "canCustomizeBody": null,
        "canCustomizePattern": null,
        
        "isInteractive": null,
        "isOutdoor": null,
        "isCatalog": null,
        "speaker-type": null, // if not null, then display items with speakers
        "lighting-type": null, // if not null, then display items with lighting
    },
    "size": null,
    "pattern": null,
    "pattern-title": null,    
    "hha-set": null,
    "color-1": [],
    "color-2": [],
    "source": [],
    "hha-concept-1": [],
    "hha-concept-2": [],
    "hha-series": [],
    "tag": [],
}

const ItemFilter = ({items, setItems}) => {
    let filteredItems = items;

    const multiFilter = () => {
        let boolFilters = null;

        // If any boolean filter is applied
        if (Object.values(appliedFilters["boolean-filters"]).includes(!null)) {
            boolFilters = Object.keys(appliedFilters["boolean-filters"])
                .filter(key => appliedFilters["boolean-filters"][key] !== null);
            console.log('boolFilters', boolFilters)
        }
        // For every item
        if (boolFilters !== null) {
            for (let i = 0; i < filteredItems.length; i++) {
                let item = items[i]
                let deleteFlag = false;
                // For every boolFilter
                boolFilters.forEach(filter => {
                    if (filter === "speaker-type" || filter === "lighting-type") {
                        if (item[0][filter] !== null) return;
                        else {
                            console.log("\t", item[0]['name']['name-USen'], 'removed')
                            filteredItems.splice(filteredItems.indexOf(item), 1);
                            deleteFlag = true;
                        }
                    }
                    // If filter is null or true, keep
                    if (item[0][filter] === null || item[0][filter] === true) {
                        
                        //console.log("\t", item[0]['name']['name-USen'], 'kept')
                    } else if (item[0][filter] === false) {
                        
                        // Else if filter is false, remove
                        console.log("\t", item[0]['name']['name-USen'], 'removed')
                        filteredItems.splice(filteredItems.indexOf(item), 1);
                        deleteFlag = true;
                    }
                })
                if (deleteFlag) i--;
            }
        }
        setItems(filteredItems);
    }

    // Toggles adding filter values to the appliedFilters array
    const toggleFilterBtn = (e) => {
        const classList = e.target.classList;
        const filter = e.target.dataset.filter;
        // If filter is not a boolean
        if (!classList.contains('bool-filter')) {
            console.log('handling non-Boolean filter')
            // If the filter is already added
            if (appliedFilters['hha-concept-1'].includes(filter)) {
                // then remove it from appliedFilters
                appliedFilters['hha-concept-1'].splice(appliedFilters['hha-concept-1'].indexOf(filter), 1);
                appliedFilters['hha-concept-2'].splice(appliedFilters['hha-concept-2'].indexOf(filter), 1);
            }
            // else add the filter to appliedFilters
            else {
                appliedFilters['hha-concept-1'].push(filter);
                appliedFilters['hha-concept-2'].push(filter);
            }
        } else {
            // else if filter is boolean
            console.log('handling Boolean filter')

            // If the filer is already added
            if (appliedFilters["boolean-filters"][filter]) {
                // then remove it
                appliedFilters["boolean-filters"][filter] = null;
            } else {
                appliedFilters["boolean-filters"][filter] = true;
            }
            console.log("appliedFilters['boolean-filters']", appliedFilters["boolean-filters"])

        }
        multiFilter(); // Apply the filters
        //document.getElementsByClassName('cycle-page-button')[0].click(); // For reloading ItemList
    }

    return (
        <div className='item-filter'>
            <h3>Filters</h3>
            <div>
                <h4 style={{clear: "both"}}>Categories</h4>
                {Object.keys(appliedFilters["boolean-filters"]).map(booleanFilter => (
                    <div
                        className='filter-option bool-filter'
                        data-filter={booleanFilter}
                        key={booleanFilter}
                        onClick={(e)=>toggleFilterBtn(e)}
                    >
                            {booleanFilter}
                    </div>
                ))}
            </div>
            <div>
                <h4 style={{clear: "both"}}>Themes</h4>
                {themes.map(theme => (
                    <div
                        className='filter-option'
                        data-filter={theme}
                        key={theme}
                        //onClick={(e)=>toggleFilterBtn(e)}
                    >
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemFilter;