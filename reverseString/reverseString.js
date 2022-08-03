// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function (s) {
  // return s.reduceRight((prev, current, index) => [...prev, current], []);
  let pointer1 = 0;
  let pointer2 = s.length - 1;
  while (pointer1 <= pointer2) {
    const temp = [s[pointer1], s[pointer2]];
    s[pointer1] = temp[1];
    s[pointer2] = temp[0];
    pointer1++;
    pointer2--;
  }
  return s;
};

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
