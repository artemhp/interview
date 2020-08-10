// function throttling(func, limit) {
//   let inThrottle;
//   return function (...args) {
//     console.log(inThrottle);
//     if (!inThrottle) {
//       inThrottle = true;
//       func(...args);
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

function throttling(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      debugger;
      func(...args);
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func(...args);
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  };
}


window.addEventListener(
  "mousemove",
  throttling((event) => {
    console.log(event);
  }, 5000)
);
