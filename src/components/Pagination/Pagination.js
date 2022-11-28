import "./Pagination.css";

/**
 * Renders pagination UI for cycling through items.
 *
 * @param   {Integer} totalNumberOfItems       Total number of items that are to be displayed.
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
  const totalPages = Math.ceil(totalNumberOfItems / itemsPerPage);

  const handleStep = (step) => {
    if (step === 1) {
      if (currentPage === totalPages) return;
      setLastItemIndex(lastItemIndex + itemsPerPage);
      currentPage++;
    } else if (step === -1) {
      if (currentPage === 1) return;
      setLastItemIndex(lastItemIndex - itemsPerPage);
      currentPage--;
    }
  };

  return (
    <div
      className="pagination"
      style={{
        display: totalPages === 0 ? "none" : "flex",
      }}
    >
      {/* First page */}
      <div className="pagination-controls">
        <button
          className="cycle-page-btn no-select"
          onClick={() => {
            currentPage = 1;
            setLastItemIndex(itemsPerPage);
          }}
        >
          &lsaquo;&lsaquo;
        </button>

        {/* Backward */}
        <button
          className="cycle-page-btn no-select"
          onClick={() => handleStep(-1)}
        >
          &lsaquo;
        </button>

        {/* Forward */}
        <button
          className="cycle-page-btn no-select"
          onClick={() => handleStep(1)}
        >
          &rsaquo;
        </button>

        {/* Last page */}
        <button
          className="cycle-page-btn no-select"
          onClick={() => {
            currentPage = totalPages;
            setLastItemIndex(itemsPerPage * totalPages);
          }}
        >
          &rsaquo;&rsaquo;
        </button>
      </div>

      {/* Page counter */}
      <span className="page-counter">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};
export default Pagination;
