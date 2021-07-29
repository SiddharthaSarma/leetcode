/**
 * Definition for singly-linked list.
 * struct ListNode {
 *   int val;
 *   ListNode *next;
 *   ListNode() : val(0), next(nullptr) {}
 *   ListNode(int x) : val(x), next(nullptr) {}
 *   ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode* deleteDuplicates(ListNode* head) {
    map<int, int> m;
    ListNode* temp = head;
    while(temp) {
      m[temp->val]++;
      temp = temp->next;
    }
    ListNode* res = new ListNode(0, head);
    temp = res;
    while (head) {
      if (m[head->val] != 1) {
        temp->next = temp->next->next;
      } else {
        temp = temp->next;
      }
      head = head->next;
    }
    return res->next;
  }
};
