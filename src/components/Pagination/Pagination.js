import "./Pagination.css";

/**
 * Renders pagination UI for cycling through items.
 *
 * @param   {Integer} numberOfItems       Total number of items that are to be displayed.
 * @param   {Integer} itemsPerPage        Number of items to be displayed on a single page.
 * @param   {Integer} lastItemIndex       The current index of the last item displayed in the page.
 * @param   {Function} setLastItemIndex    A function for setting lastItemIndex.
 * @returns {Pagination}
 */
const Pagination = ({
  totalNumberOfItems,
  itemsPerPage,
  lastItemIndex = itemsPerPage,
  setLastItemIndex,
}) => {
  let currentPage = lastItemIndex / itemsPerPage;

  const handleStep = (step) => {
    if (step === 1) {
      setLastItemIndex(lastItemIndex + itemsPerPage);
      currentPage++;
    } else if (step === -1) {
      setLastItemIndex(lastItemIndex - itemsPerPage);
      currentPage--;
    }
  };

  return (
    <div className="pagination stylized-font">
      {/* First page */}
      <button
        className="cycle-page-btn stylized-font"
        onClick={() => {
          currentPage = 1;
          setLastItemIndex(itemsPerPage);
        }}
      >
        &lsaquo;&lsaquo;
      </button>

      {/* Backward */}
      <button
        className="cycle-page-btn stylized-font"
        onClick={() => handleStep(-1)}
      >
        &lsaquo;
      </button>

      {/* Forward */}
      <button
        className="cycle-page-btn stylized-font"
        onClick={() => handleStep(1)}
      >
        &rsaquo;
      </button>

      {/* Last page */}
      <button
        className="cycle-page-btn stylized-font"
        onClick={() => {
          currentPage = Math.ceil(totalNumberOfItems / itemsPerPage);
          setLastItemIndex(
            itemsPerPage * Math.ceil(totalNumberOfItems / itemsPerPage)
          );
        }}
      >
        &rsaquo;&rsaquo;
      </button>

      {/* Page counter */}
      <span>
        Page {currentPage} of {Math.ceil(totalNumberOfItems / itemsPerPage)}
      </span>
    </div>
  );
};
export default Pagination;
