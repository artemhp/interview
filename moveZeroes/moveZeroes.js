var moveZeroes = function (nums) {
  nums.reduceRight((prev, current, index) => {
    if (current === 0) {
      nums.splice(index, 1);
      nums.push(0);
    }
  });
};

const num = [0, 0, 1];
moveZeroes(num);

console.log(num);
