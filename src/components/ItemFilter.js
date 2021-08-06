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
    "hha-concepts": [], // only two max at a time
    "hha-series": [],
    "tag": [],
}

const ItemFilter = ({items, setItems}) => {
    let filteredItems = items;

    const multiFilter = () => {
        let boolFilters = null;
        let hhaFilters = [];

        // If any boolean filter is applied
        if (Object.values(appliedFilters["boolean-filters"]).includes(!null)) {
            boolFilters = Object.keys(appliedFilters["boolean-filters"])
                .filter(key => appliedFilters["boolean-filters"][key] !== null);
            console.log('boolFilters', boolFilters)
        }
        
        //console.log('appliedFilters["hha-concept-1"]', appliedFilters["hha-concept-1"])

        // If any hha-concept filter is applied
        if (Object.values(appliedFilters["hha-concepts"]).length !== 0) {
            console.log('An HHA Concept filter has been applied!')
            hhaFilters = appliedFilters["hha-concepts"];
        }

        // For every item
        //if (boolFilters !== null) {
            for (let i = 0; i < filteredItems.length; i++) {
                let item = items[i]
                let deleteFlag = false;
                if (boolFilters !== null) {
                    // For every boolFilter
                    boolFilters.forEach(filter => {
                        // If filtering "speaker-type" or "lighting-type"
                        if (filter === "speaker-type" || filter === "lighting-type") {
                            if (item[0][filter] !== null) return;
                            else {
                                filteredItems.splice(filteredItems.indexOf(item), 1);
                                deleteFlag = true;
                            }
                        }
                        // If filter is null or true, keep
                        if (item[0][filter] === null || item[0][filter] === true) {
                            
                            //console.log("\t", item[0]['name']['name-USen'], 'kept')
                        } else if (item[0][filter] === false) {
                            // Else if filter is false, remove
                            //console.log("\t", item[0]['name']['name-USen'], 'removed')
                            filteredItems.splice(filteredItems.indexOf(item), 1);
                            deleteFlag = true;
                        }
                    })
                }
                
                // If hhaFilter is not empty
                if (hhaFilters.length !== 0) { //!== []) {
                    console.log('hhaFilters', hhaFilters);
                    // If handling 1 hha concept
                    if (hhaFilters.length === 1) {
                        if (item[0]["hha-concept-1"] === hhaFilters[0] || 
                            (item[0]["hha-concept-2"] === hhaFilters[0] && item[0]["hha-concept-2"] !== null)) {
                            //else console.log("\t", item[0]['name']['name-USen'], 'kept')
                        } else {
                            filteredItems.splice(filteredItems.indexOf(item), 1);
                            deleteFlag = true;
                            //console.log("\t", item[0]['name']['name-USen'], 'removed')
                        }
                    } else {
                        // else if handling 2 hha concepts
                        if ((item[0]["hha-concept-1"] === hhaFilters[0] && (item[0]["hha-concept-2"] === hhaFilters[1])) ||
                            (item[0]["hha-concept-1"] === hhaFilters[1] && (item[0]["hha-concept-2"] === hhaFilters[0]))
                            ) {
                            //else console.log("\t", item[0]['name']['name-USen'], 'kept')
                        } else {
                            filteredItems.splice(filteredItems.indexOf(item), 1);
                            deleteFlag = true;
                            //console.log("\t", item[0]['name']['name-USen'], 'removed')
                        }
                    }
                }
                if (deleteFlag) i--;
            }
        //}


        setItems(filteredItems);
    }

    /* 
     * Toggles adding filter values to the appliedFilters array
     * Accepted an event object e from elements with the className of 'filter-option'
     */
    const toggleFilterBtn = (e) => {
        const classList = e.target.classList;
        const filter = e.target.dataset.filter;
        // If filter is not a boolean
        if (!classList.contains('bool-filter')) {
            console.log('handling non-Boolean filter')
            // If the filter is already added
            if (appliedFilters['hha-concepts'].includes(filter)) {
                // then remove it from appliedFilters
                appliedFilters['hha-concepts'].splice(appliedFilters['hha-concepts'].indexOf(filter), 1);
            } else {
                // else add the filter to appliedFilters
                appliedFilters['hha-concepts'].push(filter);
                if (appliedFilters['hha-concepts'].length === 3)
                    appliedFilters['hha-concepts'].splice(0, 1);
            }
        } else {
            // else if filter is boolean
            console.log('handling Boolean filter')

            // Implement later: filter with the values null -> true -> false -> null
            if (appliedFilters["boolean-filters"][filter] === null) appliedFilters["boolean-filters"][filter] = true;
            //else if (appliedFilters["boolean-filters"][filter]) appliedFilters["boolean-filters"][filter] = false;
            else appliedFilters["boolean-filters"][filter] = null;
        }
        console.log("appliedFilters", appliedFilters)
        multiFilter(); // Apply the filters
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
                        onClick={(e)=>toggleFilterBtn(e)}
                    >
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemFilter;