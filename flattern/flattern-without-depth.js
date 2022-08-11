function flatten(a, d) {
  // let
  return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}

// const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const a = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];

console.log(a.flat(Infinity));
console.log(a.flat(2));
console.log(a.flat(1));

console.log(flatten(a));
console.log(flatten(a, 2));
