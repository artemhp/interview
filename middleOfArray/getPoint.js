function solution(elements) {
  let sum = elements.reduce((a, b) => a + b, 0);
  let compareTo = 0;
  return elements.find((el) => {
    if (compareTo === sum - el) {
      return el;
    }
    sum -= el;
    compareTo += el;
    return false;
  });
}
console.log(solution([2, 3, 4, 1, 4]));
