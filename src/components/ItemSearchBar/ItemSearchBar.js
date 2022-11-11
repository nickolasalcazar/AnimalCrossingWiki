import "./ItemSearchBar.css";

/**
 * Renders a search bar for filtering items.
 *
 * @param {String}  query       Query string.
 * @param {type}    setQuery    Function for changing state of query string.
 * @returns
 */
function ItemSearchBar({ query, setQuery }) {
  return (
    <div className="item-search-wrapper">
      <input
        placeholder="Search"
        type="text"
        className="item-search-bar"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default ItemSearchBar;
