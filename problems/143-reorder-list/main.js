/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (!head || !head.next) return;
  let l1 = head;
  let l2 = head;
  let prev = null;

  while (l2 && l2.next) {
    prev = l1;
    l1 = l1.next;
    l2 = l2.next.next;
  }
  
  curr = l1.next;
  prev.next.next = null;
  prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  l1 = head;
  l2 = prev;
  while (l2) {
    prev = l1;
    const temp1 = l1.next;
    l1.next = l2;
    l1 = temp1;

    const temp2 = l2.next;
    l2.next = l1;
    l2 = temp2;
  } 
};
