// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// [1,3,5,6] 0
// 0

var searchInsert = function (nums, target) {
  let lowestIndex = 0;
  let highestIndex = nums.length - 1;
  while (lowestIndex <= highestIndex) {
    const middleIndex = lowestIndex + Math.floor((highestIndex - lowestIndex) / 2);
    const analyzeNumber = nums[middleIndex];
    if (target === analyzeNumber) {
      return middleIndex;
    }
    if (nums[middleIndex - 1] < target && analyzeNumber > target) {
      return middleIndex;
    }
    if (analyzeNumber > target) {
      highestIndex = middleIndex - 1;
    } else {
      lowestIndex = middleIndex + 1;
    }
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  if (nums[0] > target) {
    return 0;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 4
