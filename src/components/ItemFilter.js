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

const ItemFilter = ({items, setItems}) => {
    let filteredItems = items;

    const multiFilter = () => {
        let boolFilters = null; // List of Boolean filters that are applied
        let hhaFilters = [];    // List of HHA filters that are applied
                                // hhaFilter = [{"bathroom": true}, {"expensive": false}]

        console.log('multiFilter: appliedFilters["hha-concepts"]', appliedFilters["hha-concepts"]);

        // If there exists any boolean filter that is true or false (and therefore not null)
        if (Object.values(appliedFilters["boolean-filters"]).includes(true) ||
            Object.values(appliedFilters["boolean-filters"]).includes(false)
            ) {
            // add the boolean filter to boolFilters
            boolFilters = Object.keys(appliedFilters["boolean-filters"])
                .filter(key => appliedFilters["boolean-filters"][key] !== null);
            console.log('boolFilters', boolFilters)
        }

        // If any hha-concept filter is applied, add to hhaFilters
        if (Object.keys(appliedFilters["hha-concepts"]).length !== 0) {
            hhaFilters = appliedFilters["hha-concepts"];
        }

        //console.log('appliedFilters["hha-concepts"]', appliedFilters["hha-concepts"])

        // For every item
        for (let i = 0; i < filteredItems.length; i++) {
            let item = items[i]
            let deleteFlag = false;
            if (boolFilters !== null) {
                // For every boolFilter
                boolFilters.forEach(filter => {
                    let boolFilterValue = appliedFilters["boolean-filters"][filter];
                    // If filtering "speaker-type" or "lighting-type"
                    if (filter === "speaker-type" || filter === "lighting-type") {
                        // If filtering for true
                        if (appliedFilters["boolean-filters"][filter] === true) {
                            // If filter value is not null AND not false, keep item
                            if ((item[0][filter] !== null)) return;
                            else {
                                filteredItems.splice(filteredItems.indexOf(item), 1);
                                deleteFlag = true;
                            }
                        } else {
                            // Else filtering for false
                            // If the filter value is null, keep item
                            if (item[0][filter] === null) return;
                            else {
                                filteredItems.splice(filteredItems.indexOf(item), 1);
                                deleteFlag = true;
                            }
                        }
                    // If filtering any other category
                    // If filter is null or true, keep
                    } else if (item[0][filter] === null || item[0][filter] === boolFilterValue) {
                        return;
                    } else if (item[0][filter] !== boolFilterValue) {
                        filteredItems.splice(filteredItems.indexOf(item), 1);
                        deleteFlag = true;
                    }
                })
            }

            item[0]["remove"] = null;

            //console.log('hhaFilters', hhaFilters);
            hhaFilters.forEach(hhaFilter => {  
                let hhaFilterName = Object.keys(hhaFilter)[0];
                //console.log('\tappliedFilters["hha-concepts"]', appliedFilters["hha-concepts"])
                //console.log('\tappliedFilters["hha-concepts"][hhaFilters.findIndex(i => i === hhaFilter)][hhaFilterName]', 
                //            appliedFilters["hha-concepts"][hhaFilters.findIndex(i => i === hhaFilter)][hhaFilterName])

                //let hhaFilterValue = appliedFilters["hha-concepts"][0][hhaFilterName];
                let hhaFilterValue = appliedFilters["hha-concepts"][hhaFilters.findIndex(i => i === hhaFilter)][hhaFilterName];

                //console.log('hhaFilterValue', hhaFilterValue);

                //console.log(item[0]["hha-concept-1"], "  ", hhaFilterName);
                //console.log('hhaFilterName', Object.keys(hhaFilter)[0], 'hhaFilterValue', hhaFilterValue)

                let alreadyRemoved = item[0]["remove"];

                // Matches
                // If item is already removed, do not add
                if (hhaFilterValue === true) {
                    if ((item[0]["hha-concept-1"] === hhaFilterName ||
                        item[0]["hha-concept-2"] === hhaFilterName) && !alreadyRemoved) {
                            // Keep
                            console.log("\t", item[0]['name']['name-USen'], 'kept')
                            item[0]["remove"] = false;
                            return;
                    } else {
                        // Remove
                        item[0]["remove"] = true;
                        console.log("\t", item[0]['name']['name-USen'], 'removed');
                    }
                } else {
                    // Inverted matches
                    if (item[0]["hha-concept-1"] === hhaFilterName ||
                        item[0]["hha-concept-2"] === hhaFilterName) 
                    {     
                        // Remove
                        item[0]["remove"] = true;
                        console.log("\t", item[0]['name']['name-USen'], 'removed');
                    } else if (!alreadyRemoved) {
                        // Keep
                        console.log("\t", item[0]['name']['name-USen'], 'kept')
                        item[0]["remove"] = false;
                        return;
                    }
                }
            });
            if (item[0]["remove"] === true) {
                filteredItems.splice(filteredItems.indexOf(item), 1);
                deleteFlag = true;
                //console.log("\t", item[0]['name']['name-USen'], 'removed');
            }
            if (deleteFlag) i--;
        }


        setItems(filteredItems);
        document.getElementsByClassName('cycle-page-btn')[0].click(); // Return to first page
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
            // console.log('Handling HHA filter _____________________________________________________');

            // Find the filter
            let targetFilter = null;

            // Check to see if the target filter already exists in applied filters
            appliedFilters['hha-concepts'].forEach(hhaConcept => {
                //if (Object.keys(hhaConcept)[0] === filter) { // Bug is here, at [0]
                //console.log('hhaConcept', hhaConcept);
                //console.log('hhaConcept[filter]', hhaConcept[filter], '| filter', filter);
                //if (hhaConcept[filter]) {
                if (typeof hhaConcept[filter] !== 'undefined') {
                    console.log('hhaConcept[filter]', hhaConcept[filter], '| filter', filter);

                    console.log('Filter found: ', hhaConcept)
                    targetFilter = hhaConcept;
                    return;
                } else console.log('Filter', filter, 'not found, was looking for ', hhaConcept[filter])

            })

            if (targetFilter !== null) {
                // If filter is true
                if (targetFilter[filter] === true)
                    {
                        console.log('Inverting filter', filter)
                        targetFilter[filter] = false;
                    }
                else
                    // Else if filter is false, remove filter altogether
                    {
                        console.log('Removing filter', filter)
                        appliedFilters['hha-concepts']
                            //.splice(appliedFilters['hha-concepts'].indexOf(filter), 1);
                            .splice(appliedFilters['hha-concepts'].indexOf(targetFilter), 1);
                    }
            } else {
                // Else add the filter with the value true
                console.log('Adding filter', filter);
                
                let filterInfo = {};
                filterInfo[filter] = true;
                
                appliedFilters['hha-concepts'].push(filterInfo);

                // and remove oldest filter to maintain size of 2
                //if (appliedFilters['hha-concepts'].length === 3)
                //    appliedFilters['hha-concepts'].splice(0, 1);
            }



        } else {
            // else if filter is boolean
            let boolFilter = appliedFilters["boolean-filters"][filter];
            if (boolFilter === null) appliedFilters["boolean-filters"][filter] = true;
            else if (boolFilter) appliedFilters["boolean-filters"][filter] = false;
            else appliedFilters["boolean-filters"][filter] = null;
        }
        console.log("appliedFilters['hha-concepts']", appliedFilters['hha-concepts'])
        multiFilter(); // Apply the filters
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

    return (
        <div className='item-filter'>
            <h3>Filters</h3>
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