/**
 * Definition for singly-linked list.
 * struct ListNode {
 *   int val;
 *   ListNode *next;
 *   ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
  ListNode* getNode(ListNode* p, ListNode* head) {
    ListNode* q = head;
    while (p != q) {
      p = p->next;
      q = q->next;
    }
    return p;
  }
  ListNode *detectCycle(ListNode *head) {
    ListNode* p = head;
    ListNode* q = head;
    while (p && q && q->next) {
      p = p->next;
      q = q->next->next;
      if (p == q) {
        return getNode(p, head);
      }
    }
    return NULL;
  }
};
