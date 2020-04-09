/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
// two pointer method
const middleNode = function(head) {
  let a = head;
  let b = head;
  while (b) {
    b = b.next;
    if (!b) {
      return a;
    }
    a = a.next;
    b = b.next;
  }
  return a;

};
