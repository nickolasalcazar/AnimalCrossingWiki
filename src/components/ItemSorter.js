
const sortOptions = [
    "Name", // Default
    "Buy Price",
    "Sell Price",
    "Size",
    "Source"
]

// UI for selecting a category to sort by.
// Controls which category the items will be sorted, e.g. price, color.
// Does not sort the actual list of items. Actual sorting takes place in
// the ItemList.js component, the parent component of ItemSorter.js 
const ItemSorter = ({sortBy, setSortBy}) => {

    const handleSelectOption = (e) => {
        let selected = e.currentTarget.textContent;

        let options = document.getElementsByClassName("item-sorter-option");

        if (selected === sortBy) {
            setSortBy(null);
            for (let i=0; i<options.length; i++) {
                
                let option = options[i];
                option.classList.remove("item-sorter-option-active");
            }
        } else {
            setSortBy(selected);
            for (let i=0; i<options.length; i++) {
                let option = options[i];
                if (option.textContent !== selected) option.classList.remove("item-sorter-option-active")
                else option.classList.add("item-sorter-option-active");
            }
        }
    }

    return (
        <div className="item-sorter stylized-font">
            <button className="item-sorter-button" type="button">
                Sort By
            </button >
            <div className="item-sorter-options">
                {sortOptions.map(option => (
                    <div className="item-sorter-option" key={option} onClick={e=>handleSelectOption(e)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemSorter;