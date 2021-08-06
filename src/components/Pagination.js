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
        <div className='pagination'>
            {/* First page */}
            <button className='cycle-page-button' onClick={()=>{
                currentPage = 1;
                setLastItemIndex(itemsPerPage);
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
                <p>Page {currentPage} of {Math.ceil(numberOfItems / itemsPerPage)}</p>
            </div>
        </div>
    );
}
export default Pagination;