const rotate = function (nums, k) {
  const chunk = nums.splice(0, nums.length - (k % nums.length));
  nums.push(...chunk);  
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
