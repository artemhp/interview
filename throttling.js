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
  let executeFunc;
  let lastRanTimeStamp;
  return function (...args) {
    if (!lastRanTimeStamp) {
      func(...args);
      lastRanTimeStamp = Date.now()
    } else {
      clearTimeout(executeFunc);
      const timeFromLastRan = (Date.now() - lastRanTimeStamp);
      executeFunc = setTimeout(function() {
        if (timeFromLastRan >= limit) {
          func(...args);
          lastRanTimeStamp = Date.now();
        }
      }, limit - timeFromLastRan)
    }
  };
}


window.addEventListener(
  "mousemove",
  throttling((event) => {
    console.log(event);
  }, 5000)
);
