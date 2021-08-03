/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const rotateRight = function(head, k) {
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  const rem = (k % length) | 0;
  if (rem == 0) {
    return head;
  }
  const right = new ListNode(0);
  temp = right;
  for (let i = 1; i <= length - rem; i++) {
    temp.next = new ListNode(head.val);
    head = head.next;
    temp = temp.next;
  }
  temp = head;
  while (temp && temp.next) {
    temp = temp.next;
  }
  temp.next = right.next;
  return head;
};
