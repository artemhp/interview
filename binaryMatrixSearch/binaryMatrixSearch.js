const m = [
  [1, 6, 10, 13, 14, 16, 21],
  [3, 10, 12, 18, 22, 27, 29],
  [3, 15, 19, 20, 23, 29, 34],
  [8, 15, 19, 25, 27, 29, 39],
  [12, 17, 24, 25, 28, 29, 41],
  [16, 22, 27, 31, 31, 33, 44],
  [20, 26, 28, 35, 39, 41, 45],
  [25, 31, 34, 39, 44, 45, 47],
];
const searchMatrix = (matrix, target) => {
  let prevRow = 0;
  let targetRow = matrix.length - 1;

  const binarySearch = (array, value) => {
    let lowestIndex = 0;
    let highestIndex = array.length - 1;

    while (lowestIndex <= highestIndex) {
      const middleIndex = lowestIndex + Math.floor((highestIndex - lowestIndex) / 2);
      const middle = array[middleIndex];
      if (middle === value) {
        return true;
      }
      if (middle < value) {
        lowestIndex = middleIndex + 1;
      } else {
        highestIndex = middleIndex - 1;
      }
    }
  };

  let lowerRowIndex = 0;
  let higherRowIndex = matrix.length - 1;

  let lowerColumnIndex = 0;
  let higherColumnIndex = matrix[0].length - 1;

  while (lowerRowIndex <= higherRowIndex) {
    let middleRowIndex = lowerRowIndex + Math.floor((higherRowIndex - lowerRowIndex) / 2);
    if (!middleRowIndex && higherRowIndex === lowerRowIndex) {
      middleRowIndex = lowerRowIndex;
    } else if (!middleRowIndex) {
      middleRowIndex = lowerRowIndex;
    }
    if (matrix[middleRowIndex][0] === target || (matrix[middleRowIndex][0] > target && prevRow && matrix[middleRowIndex - 1][0] < target)) {
      targetRow = middleRowIndex;
    }
    if (matrix[middleRowIndex][0] > target) {
      higherRowIndex = middleRowIndex - 1;
    } else {
      lowerRowIndex = middleRowIndex + 1;
    }
  }

  for (let i = 0; i <= targetRow; i++) {
    binarySearch(matrix[i], target);
  }

  return false;
};

console.log(searchMatrix(m, 38));
