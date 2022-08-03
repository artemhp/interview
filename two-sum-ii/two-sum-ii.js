// Two Sum II - Input Array Is Sorted

// Input: numbers = [1,2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function (numbers, target) {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;
  while (pointer1 <= pointer2) {
    const sum = numbers[pointer1] + numbers[pointer2];
    console.log(sum);
    debugger;
    if (sum === target) {
      return [pointer1 + 1, pointer2 + 1];
    }
    if (sum > target) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 16));
