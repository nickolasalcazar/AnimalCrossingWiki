/*
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
    "zen-style"];*/

let appliedFilters = {
    "pattern": null,
    "pattern-title": null,
    "isDIY": null,
    "canCustomizeBody": null,
    "canCustomizePattern": null,
    "color-1": [],            // more than 1 color
    "color-2": [],
    "size": null,
    "source": [],
    "hha-concept-1": [],    // more than 1 hha concept
    "hha-concept-2": [],
    "hha-series": [],
    "hha-set": null,
    "isInteractive": null,
    "tag": [],              // multiple tags?
    "isOutdoor": null,
    "speaker-type": null,
    "lighting-type": null,
    "isCatalog": null,
}

const ItemFilter = ({items, setItems}) => {
    let filteredItems = items;

    const multiFilter = () => {
        console.log(items);
        
        for (let i = 0; i < filteredItems.length; i++) {
            let item = items[i]

            console.log(item)
            // If the first variant !isOutdoor, remove it
            if (!item[0]['isOutdoor']) {
                console.log("\t", item[0]['name']['name-USen'], 'is indoor')
                console.log('\t', 'items.indexOf(item)', items.indexOf(item))
                filteredItems.splice(filteredItems.indexOf(item), 1)
                i--;

                setItems(filteredItems);
                
            } else { console.log("\t", item[0]['name']['name-USen'], 'is outdoor') }
        }
    }

    // Toggles adding filter values to the appliedFilters array
    const toggleFilterBtn = (e) => {
        const classList = e.target.classList;
        const filter = e.target.dataset.theme;
        // Add theme filter
        if (classList.contains('theme-filter')) {
            // If the filter is already added
            if (appliedFilters['hha-concept-1'].includes(filter)) {
                // then remove it from appliedFilters
                appliedFilters['hha-concept-1'].splice(appliedFilters['hha-concept-1'].indexOf(filter), 1)
                appliedFilters['hha-concept-2'].splice(appliedFilters['hha-concept-2'].indexOf(filter), 1)
            }
            // else add the filter to appliedFilters
            else {
                appliedFilters['hha-concept-1'].push(filter)
                appliedFilters['hha-concept-2'].push(filter)
            }
        }
        multiFilter(); // for testing
        // grab "first page button", make it fire to reload the page
        console.log('grabbed', document.getElementsByClassName('cycle-page-button')[2]);
        document.getElementsByClassName('cycle-page-button')[2].click();
        document.getElementsByClassName('cycle-page-button')[0].click();
        //document.getElementsByClassName('cycle-page-button')[2].dispatchEvent(new Event('click'));
    }

    return (
        <div className='item-filter'>
            <h3>Themes</h3>
            {/* Map these rather than hard code them! */}
            <div className='theme-filter' data-theme="bathroom" onClick={(e)=>toggleFilterBtn(e)}>Bathroom</div>
            <div className='theme-filter' data-theme="child's room" onClick={(e)=>toggleFilterBtn(e)}>Child's room</div>
            <div className='theme-filter' data-theme="concert" onClick={(e)=>toggleFilterBtn(e)}>Concert</div>
            <div className='theme-filter' data-theme="den" onClick={(e)=>toggleFilterBtn(e)}>Den</div>
            <div className='theme-filter' data-theme="expensive" onClick={(e)=>toggleFilterBtn(e)}>Expensive</div>
            <div className='theme-filter' data-theme="facility" onClick={(e)=>toggleFilterBtn(e)}>Facility</div>
            <div className='theme-filter' data-theme="fancy" onClick={(e)=>toggleFilterBtn(e)}>Fancy</div>
            <div className='theme-filter' data-theme="fitness" onClick={(e)=>toggleFilterBtn(e)}>Fitness</div>
            <div className='theme-filter' data-theme="folk art" onClick={(e)=>toggleFilterBtn(e)}>Folk Art</div>
            <div className='theme-filter' data-theme="freezing cold" onClick={(e)=>toggleFilterBtn(e)}>Freezing Cold</div>
            <div className='theme-filter' data-theme="garage" onClick={(e)=>toggleFilterBtn(e)}>Garage</div>
            <div className='theme-filter' data-theme="garden" onClick={(e)=>toggleFilterBtn(e)}>Garden</div>
            <div className='theme-filter' data-theme="horror" onClick={(e)=>toggleFilterBtn(e)}>Horror</div>
            <div className='theme-filter' data-theme="kitchen" onClick={(e)=>toggleFilterBtn(e)}>Kitchen</div>
            <div className='theme-filter' data-theme="living room" onClick={(e)=>toggleFilterBtn(e)}>Living Room</div>
            <div className='theme-filter' data-theme="music" onClick={(e)=>toggleFilterBtn(e)}>Music</div>
            <div className='theme-filter' data-theme="ocean" onClick={(e)=>toggleFilterBtn(e)}>Ocean</div>
            <div className='theme-filter' data-theme="office" onClick={(e)=>toggleFilterBtn(e)}>Office</div>
            <div className='theme-filter' data-theme="outdoors" onClick={(e)=>toggleFilterBtn(e)}>Outdoors</div>
            <div className='theme-filter' data-theme="outdoorsy" onClick={(e)=>toggleFilterBtn(e)}>Outdoorsy</div>
            <div className='theme-filter' data-theme="party" onClick={(e)=>toggleFilterBtn(e)}>Party</div>
            <div className='theme-filter' data-theme="school" onClick={(e)=>toggleFilterBtn(e)}>School</div>
            <div className='theme-filter' data-theme="shop" onClick={(e)=>toggleFilterBtn(e)}>Shop</div>
            <div className='theme-filter' data-theme="sporty" onClick={(e)=>toggleFilterBtn(e)}>Sporty</div>
            <div className='theme-filter' data-theme="vacation" onClick={(e)=>toggleFilterBtn(e)}>Vacation</div>
            <div className='theme-filter' data-theme="work" onClick={(e)=>toggleFilterBtn(e)}>Work</div>
            <div className='theme-filter' data-theme="zen-style" onClick={(e)=>toggleFilterBtn(e)}>Zen-style</div>
        </div>
    );
}
export default ItemFilter;