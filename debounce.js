function debounce(func, timer) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args)
        }, timer)
    }
}

window.addEventListener('click', debounce((event) => {
    console.log(event);
}, 1000));