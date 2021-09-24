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
        <div className='pagination stylized-font'>
            {/* First page */}
            <button className='cycle-page-btn stylized-font' onClick={()=>{
                currentPage = 1;
                setLastItemIndex(itemsPerPage);
            }}>&lsaquo;&lsaquo;</button>

            {/* Backward */}
            <button className='cycle-page-btn stylized-font'
                onClick={()=>handleStep(-1)}>&lsaquo;</button>
            {/* Forward */}
            <button className='cycle-page-btn stylized-font'
                onClick={()=>handleStep(1)}>&rsaquo;</button>

            {/* Last page */}
            <button className='cycle-page-btn stylized-font' onClick={()=>{
                currentPage =  Math.ceil(numberOfItems / itemsPerPage);
                setLastItemIndex(itemsPerPage*Math.ceil(numberOfItems / itemsPerPage))
            }}>&rsaquo;&rsaquo;</button>

            {/* Page counter */}
            <span>Page {currentPage} of {Math.ceil(numberOfItems / itemsPerPage)}</span>
        </div>
    );
}
export default Pagination;