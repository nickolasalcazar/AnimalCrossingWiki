/*
 * Renders a buttons cycling through page and page counter.
 * Take in a itemsPerPage argument
 */
const Pagination = ({ numberOfItems, itemsPerPage, lastItemIndex, setLastItemIndex }) => {
    let currentPage = lastItemIndex / itemsPerPage;

    const handleStep = (step) => {
        if (step === 1) {
            setLastItemIndex(lastItemIndex+itemsPerPage);
            currentPage++;
        } else if (step === -1) {
            setLastItemIndex(lastItemIndex-itemsPerPage);
            currentPage--;
        }
    }

    return (
        <>
            {/* First page */}
            <button className='cycle-page-button' onClick={()=>{
                currentPage = 1;
                // Add 0.001 is part of jank solution to get component to rerender when filter is applied.
                // Page does not reload if itemsPerPage remains the same
                setLastItemIndex(itemsPerPage + 0.001);
            }}>First page</button>

            {/* Backward */}
            <button className='cycle-page-button' onClick={()=>handleStep(-1)}>Backward</button>
            {/* Forward */}
            <button className='cycle-page-button' onClick={()=>handleStep(1)}>Forward</button>

            {/* Last page */}
            <button className='cycle-page-button' onClick={()=>{
                currentPage =  Math.ceil(numberOfItems / itemsPerPage);
                setLastItemIndex(itemsPerPage*Math.ceil(numberOfItems / itemsPerPage))
            }}>Last page</button>

            {/* Page counter */}
            <div>
                <p>Page {Math.floor(currentPage)} of {Math.ceil(numberOfItems / itemsPerPage)}</p>
            </div>
        </>
    );
}
export default Pagination;