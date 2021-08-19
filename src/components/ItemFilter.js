import { useState, useEffect } from "react";

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
    //"outdoorsy",
    "party",
    "school",
    "shop",
    "space",
    //"sporty",
    //"vacation",
    //"work",
    "zen-style"];

let appliedFilters = {
    "boolean-filters": {
        "isDIY": null,
        "canCustomizeBody": null,
        "canCustomizePattern": null,
        
        "isInteractive": null,
        "isOutdoor": null,
        "isCatalog": null,
        "speaker-type": null,
        "lighting-type": null,
    },
    "size": null,
    "pattern": null,
    "pattern-title": null,    
    "hha-set": null,
    "color-1": [],
    "color-2": [],
    "source": [],
    "hha-concepts": [], // only two max at a time
    // hha-concepts is an array of two objects that contain info about current themes applied
    // "hha-concepts": [{"bathroom": true}, {"expensive": false}]
    "hha-series": [],
    "tag": [],
}

/**
 * Contains all the buttons for applying filters to items displayed in ItemCatalog.js, in addition to the logic
 * associated with applying those filters.
 * @param   {Array}     items State variable of array containing all Animal Crossing furniture items.
 * @param   {setItems}  setItems useState hook for setting the value of items.
 */
const ItemFilter = ({items, setItems}) => {
    let filteredItems = items;
    const [query, setQuery] = useState('');

    /**
     * Modifies the state variable items by applying the filters specified in appliedFitlers.
     * @returns {void}
     */
    const multiFilter = () => {
        let boolFilters = null; // List of Boolean filters to beapplied
        let hhaFilters = [];    // List of HHA filters to be applied

        console.log('multiFilter: appliedFilters["hha-concepts"]', appliedFilters["hha-concepts"]);

        // Store non-null boolean filters in boolFilters
        boolFilters = Object.keys(appliedFilters["boolean-filters"])
            .filter(key => appliedFilters["boolean-filters"][key] !== null);

        // Store HHA filter in hhaFilters
        hhaFilters = appliedFilters["hha-concepts"];

        // For every item, apply the filters specified in: query, booleanFilters, hhaFilters
        for (let i = 0; i < filteredItems.length; i++) {
            console.log('i', i);
            let item = items[i]
            let deleteFlag = false;
            item[0]["remove"] = false;
            
            // // Remove any items that do not match the query string
            if (query !== '') {
                if (item[0]["name"]["name-USen"].slice(0, query.length).toLowerCase() !== query) {
                    //item[0]["remove"] = true;
                    filteredItems.splice(filteredItems.indexOf(item), 1);
                    i--; //
                    console.log('Removing ', item[0]["name"]["name-USen"], ' by query');
                    continue;
                    //deleteFlag = true; //
                }// else console.log('Keeping ', item[0]["name"]["name-USen"])
            }
            
            // If not already deleted
            if (!deleteFlag) {
                // Apply Boolean Filters
                if (boolFilters !== null) {    
                    boolFilters.forEach(filter => {
                        if (deleteFlag) return;

                        let boolFilterValue = appliedFilters["boolean-filters"][filter];
                        // If filtering "speaker-type" or "lighting-type"
                        if (filter === "speaker-type" || filter === "lighting-type") {
                            // If filtering for true
                            if (appliedFilters["boolean-filters"][filter] === true) {
                                // If filter value is null, remove item
                                if (item[0][filter] === null) {
                                    console.log('Removing item: ', item[0]["name"]["name-USen"]);
                                    filteredItems.splice(filteredItems.indexOf(item), 1);
                                    
                                    deleteFlag = true;
                                } else console.log('Keeping item: ', item[0]["name"]["name-USen"]);
                            } else {
                                // Else filtering for false
                                // If the filter value is not null, remove item
                                if (item[0][filter] !== null) {
                                    console.log('Removing item: ', item[0]["name"]["name-USen"]);
                                    filteredItems.splice(filteredItems.indexOf(item), 1);
                                    
                                    deleteFlag = true;
                                } else console.log('Keeping item: ', item[0]["name"]["name-USen"]);
                            }
                        // If filtering any other category
                        // If filter is null or true, keep
                        } else if (item[0][filter] === null || item[0][filter] === boolFilterValue) {
                            console.log('Keeping item: ', item[0]["name"]["name-USen"]);
                            return;
                        } else if (item[0][filter] !== boolFilterValue) {
                            console.log('Removing item: ', item[0]["name"]["name-USen"]);
                            filteredItems.splice(filteredItems.indexOf(item), 1);
                            
                            deleteFlag = true;
                        }
                    })
                }
            }
            //item[0]["remove"] = null;
            // If not already removed
            if (!deleteFlag) {
                // Apply HHA filters
                hhaFilters.forEach(hhaFilter => { 
                    let hhaFilterName = Object.keys(hhaFilter)[0];
                    let hhaFilterValue = appliedFilters["hha-concepts"][hhaFilters.findIndex(i => i === hhaFilter)][hhaFilterName];
                    let alreadyRemoved = item[0]["remove"];
                    //let alreadyRemoved = null;

                    // Matches
                    // If item is already removed, do not add
                    if (hhaFilterValue === true) {
                        if ((item[0]["hha-concept-1"] === hhaFilterName ||
                            item[0]["hha-concept-2"] === hhaFilterName) && !alreadyRemoved) {
                                // Keep
                                item[0]["remove"] = false;
                                console.log('Keeping item: ', item[0]["name"]["name-USen"]);
                                return;
                        } else {
                            // Remove
                            item[0]["remove"] = true;
                            console.log('Removing item: ', item[0]["name"]["name-USen"]);
                        }
                    } else {
                        // Inverted matches
                        if (item[0]["hha-concept-1"] === hhaFilterName ||
                            item[0]["hha-concept-2"] === hhaFilterName) 
                        {     
                            // Remove
                            item[0]["remove"] = true;
                            console.log('Removing item: ', item[0]["name"]["name-USen"]);
                        } else if (!alreadyRemoved) {
                            // Keep
                            console.log('Keeping item: ', item[0]["name"]["name-USen"]);
                            item[0]["remove"] = false;
                            return;
                        }
                    }
                });
            }

            // Remove any items that do not match the query string
            // if (query !== '') {
            //     if (item[0]["name"]["name-USen"].slice(0, query.length) !== query) {
            //         if (item[0]["remove"] === false && !deleteFlag) {
            //             filteredItems.splice(filteredItems.indexOf(item), 1);
            //             i--;
            //         }
            //     }
            // }
            
            if (item[0]["remove"] === true) {
                filteredItems.splice(filteredItems.indexOf(item), 1);
                i--;
                //deleteFlag = true;
            }
            if (deleteFlag) i--;
        }
        console.log('\n________________________________________________________________________\n')
        setItems(filteredItems);
        document.getElementsByClassName('cycle-page-btn')[0].click(); // Return to first page
    }

    /**
     * Toggles adding filter values to the appliedFilters array. Calls the multiFilter function 
     * to apply the filters specified in the appliedFilters array.
     * @param   {Event} e Event object containing target element from which filter is applied.
     * @returns {void}
     */
    const toggleFilterBtn = (e) => {
        const classList = e.target.classList;
        const filter = e.target.dataset.filter;
        // If filter is not a boolean filter
        if (!classList.contains('bool-filter')) {
            let targetFilter = null;

            // Check to see if targetFilter already exists in appliedFilters array
            appliedFilters['hha-concepts'].forEach(hhaConcept => {
                if (typeof hhaConcept[filter] !== 'undefined') {
                    targetFilter = hhaConcept;
                    return; // If found, assign hhaConcept to targerFilter and return
                }
            });

            // If targetFilter is not null, then it already has been applied once before
            if (targetFilter !== null) {
                // If targetFilter is true, then set to false
                if (targetFilter[filter] === true) {
                    targetFilter[filter] = false;
                } else {
                    // Else if targetFilter is false, then remove targetFilter appliedFilters
                    appliedFilters['hha-concepts']
                        .splice(appliedFilters['hha-concepts'].indexOf(targetFilter), 1);
                }
            } else {
                // Else add the filter to the appliedFilters array, set to true
                let filterInfo = {};
                filterInfo[filter] = true;
                appliedFilters['hha-concepts'].push(filterInfo);
            }
        } else { // Else if filter is boolean
            let boolFilter = appliedFilters["boolean-filters"][filter];
            // If filter is null, add to appliedFilters as true
            if (boolFilter === null) appliedFilters["boolean-filters"][filter] = true;
            // Else if filter is true, set to false
            else if (boolFilter) appliedFilters["boolean-filters"][filter] = false;
            // Else if filter is false, set to null
            else appliedFilters["boolean-filters"][filter] = null;
        }
        multiFilter(); // Apply the filters by calling multiFilter
    }

    /*
     * Toggles CSS styling for all filter option buttons
     */
    const toggleFilterBtnDisplay = (e) => {
        // if null, make true
        if (e.target.classList.contains("filter-option-null"))
            e.target.classList.replace("filter-option-null", "filter-option-true");
        // if true, make false
        else if (e.target.classList.contains("filter-option-true"))
            e.target.classList.replace("filter-option-true", "filter-option-false");
        // if false, make null
        else e.target.classList.replace("filter-option-false", "filter-option-null");
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => multiFilter(), 500);
        //console.log('Query:', query)
        return () => clearTimeout(timeOutId);
        // eslint-disable-next-line
    }, [query]);

    return (
        <div className='item-filter'>
            <h3>Filters</h3>
            <div className='item-search-field'>
                    <input type='search' onChange={e => setQuery(e.target.value.toLowerCase())}></input>
            </div>
            <div>
                <h4 style={{clear: "both"}}>Categories</h4>
                {Object.keys(appliedFilters["boolean-filters"]).map(booleanFilter => (
                    <div
                        className='filter-option bool-filter filter-option-null'
                        data-filter={booleanFilter}
                        key={booleanFilter}
                        onClick={(e)=>{ toggleFilterBtn(e); toggleFilterBtnDisplay(e); }}
                    >
                        {booleanFilter}
                    </div>
                ))}
            </div>
            <div>
                <h4 style={{clear: "both"}}>Themes</h4>
                {themes.map(theme => (
                    <div
                        className='filter-option filter-option-null'
                        data-filter={theme}
                        key={theme}
                        onClick={(e)=>{ toggleFilterBtn(e); toggleFilterBtnDisplay(e); }}
                    >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemFilter;