module.exports = (currentPage, limit, totalRow) => {
    
    const totalPages = Math.ceil(totalRow / limit);
    
    let pages= [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages ; i ++ ) {
        if (
            i === 1 ||
            
            i === totalPages || 
            i === currentPage ||
            (i >= left ) && (i <= right)
        ) {
            pages.push(i);
        } else if ( i === left - 1 || i === right + 1) {
            pages.push("...")
        }
    }

    return pages;
}