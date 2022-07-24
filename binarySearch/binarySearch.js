const binarySearch = (array, value) => {
  let lowestIndex = 0;
  let highestIndex = array.length - 1;

  while (lowestIndex <= highestIndex) {
    const middleIndex = lowestIndex + Math.floor((highestIndex - lowestIndex) / 2);
    const middle = array[middleIndex];
    if (middle === value) {
      return middle;
    }
    if (middle < value) {
      lowestIndex = middleIndex + 1;
    } else {
      highestIndex = middleIndex - 1;
    }
  }
  return -1;
};

console.log(binarySearch([2, 5, 8, 12, 19], 5));
