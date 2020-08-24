function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args)
        }, wait)
    }
}

/* istanbul ignore next */
if ( typeof module === 'object' ) {
    module.exports = debounce;
}