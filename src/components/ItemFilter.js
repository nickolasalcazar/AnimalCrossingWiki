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
    "pattern": null,
    "pattern-title": null,
    "isDIY": null,
    "canCustomizeBody": null,
    "canCustomizePattern": null,
    "color": [],
    "size": null,
    "source": [],
    "hha-concept": [],
    "hha-series": [],
    "hha-set": null,
    "isInteractive": null,
    "tag": [],
    "isOutdoor": null,
    "speaker-type": null,
    "lighting-type": null,
    "isCatalog": null,
}

const ItemFilter = ({items, setItems}) => {

    /**
     * Multi-filter an array of objects
     * @param  {Array}  array  : list of elements to apply a multiple criteria filter
     * @param  {Object} filters: Contains multiple criteria filters by the property names of the objects to filter
     * @return {Array}
     * https://gist.github.com/diegochavez/e9019fedefa0553ce7efc12857739322
     */
    const multiFilter = (/*array, filters*/) => {
        console.log('working');
        //let filterKeys = Object.keys(filters);
        let filterKeys = Object.keys(appliedFilters);

        //return array.filter((item) => filterKeys.every((key) => (filters[key].indexOf(item[key]) !== -1)));

        // BUG: items cannot be filtered through like an array
        // SOLUTION: turn items into an array. See ItemList.js comment
        setItems(items.filter((item) => filterKeys.every((key) => (appliedFilters[key].indexOf(item[key]) !== -1))));
        console.log('filtering');
    }

    // Toggle adding filter values to the appliedFilters array
    const toggleFilterBtn = (e) => {
        const classList = e.target.classList;
        const filter = e.target.value;

        if (classList.contains('theme-filter')) {
            // If the filter is already added
            if (appliedFilters['hha-concept'].includes(filter)) {
                // then remove it from appliedFilters
                appliedFilters['hha-concept'].splice(appliedFilters['hha-concept'].indexOf(filter), 1)
            }
            // else add the filter to appliedFilters
            else appliedFilters['hha-concept'].push(filter);
        }
        multiFilter();
    }

    return (
        <div className='item-filter'>
            <h3>Themes</h3>
            <div className='theme-filter' value="bathroom" onClick={(e)=>toggleFilterBtn(e)}>Bathroom</div>
            <div className='theme-filter' value="child's room">Child's room</div>
            <div className='theme-filter' value="concert">Concert</div>
            <div className='theme-filter' value="den">Den</div>
            <div className='theme-filter' value="expensive">Expensive</div>
            <div className='theme-filter' value="facility">Facility</div>
            <div className='theme-filter' value="fancy">Fancy</div>
            <div className='theme-filter' value="fitness">Fitness</div>
            <div className='theme-filter' value="folk art">Folk Art</div>
            <div className='theme-filter' value="freezing cold">Freezing Cold</div>
            <div className='theme-filter' value="garage">Garage</div>
            <div className='theme-filter' value="garden">Garden</div>
            <div className='theme-filter' value="horror">Horror</div>
            <div className='theme-filter' value="kitchen">Kitchen</div>
            <div className='theme-filter' value="living room">Living Room</div>
            <div className='theme-filter' value="music">Music</div>
            <div className='theme-filter' value="ocean">Ocean</div>
            <div className='theme-filter' value="office">Office</div>
            <div className='theme-filter' value="outdoors">Outdoors</div>
            <div className='theme-filter' value="outdoorsy">Outdoorsy</div>
            <div className='theme-filter' value="party">Party</div>
            <div className='theme-filter' value="school">School</div>
            <div className='theme-filter' value="shop">Shop</div>
            <div className='theme-filter' value="sporty">Sporty</div>
            <div className='theme-filter' value="vacation">Vacation</div>
            <div className='theme-filter' value="work">Work</div>
            <div className='theme-filter' value="zen-style">Zen-style</div>
        </div>
    );
}
export default ItemFilter;