// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseString = function (s) {
  // return s.reduceRight((prev, current, index) => [...prev, current], []);
  s = s.split('');
  let pointer1 = 0;
  let pointer2 = s.length - 1;
  while (pointer1 <= pointer2) {
    const temp = [s[pointer1], s[pointer2]];
    s[pointer1] = temp[1];
    s[pointer2] = temp[0];
    pointer1++;
    pointer2--;
  }
  return s.join('');
};

var reverseWords = function (s) {
  return s
    .split(' ')
    .map((el) => reverseString(el))
    .join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
// "s'teL ekat edoCteeL tsetnoc"
