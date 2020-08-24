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
          func(...args);
          lastRanTimeStamp = Date.now();
      }, limit - timeFromLastRan)
    }
  };
}

/* istanbul ignore next */
if ( typeof module === 'object' ) {
  module.exports = throttling;
}
