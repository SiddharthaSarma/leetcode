/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    stack<int> s1;
    stack<int> s2;
    int size1 = 0;
    int size2 = 0;
    ListNode* temp = l1;
    while(temp) {
      size1++;
      temp = temp->next;
    }
    temp = l2;
    while(temp) {
      size2++;
      temp = temp->next;
    }
    int diff = 0;
    if (size1 < size2) {
      diff = size2 - size1;
      while(diff) {
        s1.push(0);
        diff--;
      }
    } else if (size2 < size1) {
      diff = size1 - size2;
      while(diff) {
        s2.push(0);
        diff--;
      }
    }

    temp = l1;
    while(temp) {
      s1.push(temp->val);
      temp = temp->next;
    }
    temp = l2;
    while(temp) {
      s2.push(temp->val);
      temp = temp->next;
    }

    stack<int> q;
    int overflow = 0;
    while (!s1.empty()) {
      int sum = s1.top() + s2.top() + overflow;
      if (sum >= 10) {
        overflow = 1;
        sum -= 10;
      } else {
        overflow = 0;
      }
      s1.pop();
      s2.pop();
      q.push(sum);
    }

    ListNode* res = new ListNode(overflow);
    temp = res;
    while(!q.empty()) {
      temp->next = new ListNode(q.top());
      q.pop();
      temp = temp->next;
    }
    return overflow ? res : res->next;
  }
};
