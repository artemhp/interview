function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args)
        }, wait)
    }
}

window.addEventListener('click', debounce((event) => {
    console.log(event);
}, 1000));