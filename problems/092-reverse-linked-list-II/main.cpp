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
  ListNode* reverseBetween(ListNode* head, int left, int right) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode* nodeBeforeSubList = &dummy;
    for (int i = 1; i < left; i++) {
      nodeBeforeSubList = nodeBeforeSubList->next;
    }
    ListNode* workingPtr = nodeBeforeSubList->next;
    for (int i = 0; i < right - left; i++) {
      auto nodeToBeExtracted = workingPtr->next;
      workingPtr->next = nodeToBeExtracted->next;

      nodeToBeExtracted->next = nodeBeforeSubList->next;
      nodeBeforeSubList->next = nodeToBeExtracted;
    }
    return dummy.next;
  }
};
