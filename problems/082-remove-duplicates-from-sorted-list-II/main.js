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
const deleteDuplicates = function(head) {
  let temp = head;
  const map = {};
  while (temp) {
    map[temp.val] = map[temp.val] ? map[temp.val] + 1 : 1;
    temp = temp.next;
  }
  const res = new ListNode(0, head);
  temp = res;
  while (head) {
    if (map[head.val] !== 1) {
        temp.next = temp.next.next;
    } else {
        temp = temp.next;
    }
    head = head.next;
  }
  return res.next;
};
