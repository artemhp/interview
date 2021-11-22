//Implement the function that will add one on each subsequent call.
// Please implement "getValue" method also:

const addOne = () => {
  let iterator = 1;
  const solution = () => {
    iterator++;
    return solution;
  };
  solution.getValue = () => {
    return iterator;
  };
  return solution;
};

console.log(addOne()()().getValue()); // 3
console.log(addOne().getValue()); // 1
console.log(addOne()().getValue()); // 2
