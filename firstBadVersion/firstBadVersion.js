/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lowestIndex = 1;
    let highestIndex = n;

    while (lowestIndex < highestIndex) {
      const middle = lowestIndex + Math.floor((highestIndex - lowestIndex) / 2);
      if (isBadVersion(middle)) {
        highestIndex = middle;
      } else {
        lowestIndex = middle + 1;
      }
    }
    return lowestIndex;
  };
};
