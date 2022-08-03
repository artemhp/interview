/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const getMiddle = Math.floor(head.length / 2);
  head.splice(0, getMiddle);
  return head;
};

console.log(middleNode([1, 2, 3, 4, 5])); // [4,5,6]
