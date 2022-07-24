var romanToInt = function (s) {
  return s
    .split('')
    .reverse()
    .reduce(
      (acc, el) => {
        if (acc.prev <= acc.letters[el]) {
          acc.result += acc.letters[el];
        } else {
          acc.result -= acc.letters[el];
        }
        acc.prev = acc.letters[el];
        return acc;
      },
      {
        result: 0,
        prev: 0,
        letters: {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000,
        },
      },
    ).result;
};

console.log('III', romanToInt('III'));
console.log('IV', romanToInt('IV'));
console.log('X', romanToInt('X'));
console.log('XX', romanToInt('XX'));
console.log('LVIII', romanToInt('LVIII'));
