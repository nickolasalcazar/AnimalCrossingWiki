/*
 * Renders a buttons cycling through page and page counter.
 * Take in a itemsPerPage argument
 */
const Pagination = ({ numberOfItems, itemsPerPage, currentPage, setCurrentPage, lastItemIndex, setLastItemIndex }) => {
    const currentPageTEST = /*Math.ceil(numberOfItems / itemsPerPage) - Math.ceil*/(lastItemIndex / itemsPerPage);

    const handleStep = (step) => {
        if (step === 1) {
            setLastItemIndex(lastItemIndex+itemsPerPage);
            setCurrentPage(currentPage+1);
        } else if (step === -1) {
            setLastItemIndex(lastItemIndex-itemsPerPage);
            setCurrentPage(currentPage-1);
        }
    }

    return (
        <>
            {/* First page */}
            <button onClick={()=>{
                setCurrentPage(1);
                setLastItemIndex(itemsPerPage);
            }}>First page</button>

            {/* Backward */}
            <button onClick={()=>handleStep(-1)}>Backward</button>
            {/* Forward */}
            <button onClick={()=>handleStep(1)}>Forward</button>

            {/* Last page */}
            <button onClick={()=>{
                setCurrentPage(Math.ceil(numberOfItems / itemsPerPage));
                setLastItemIndex(itemsPerPage*Math.ceil(numberOfItems / itemsPerPage))
            }}>Last page</button>

            <div>
                {/* <p>Page {currentPage} of {Math.ceil(numberOfItems / itemsPerPage)}</p> */}
                <p>Page {currentPageTEST} of {Math.ceil(numberOfItems / itemsPerPage)}</p>
            </div>
        </>
    );
}
export default Pagination;