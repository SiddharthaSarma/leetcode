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

/** solution 1 **/
class Solution {
public:
  bool isPalindrome(ListNode* head) {
    string res, reversestr;
    while(head) {
      res += to_string(head->val);
      head = head->next;
    }
    reversestr = string(res.rbegin(), res.rend());
    return reversestr == res;

  }
};

/** solution 2 **/
class Solution {
public:
  bool isPalindrome(ListNode* head) {
    return check(head, head);
  }
  bool check(ListNode*& head, ListNode* p) {
    if (!p) return true;
    bool isPalindrome = check(head, p->next);
    if (!isPalindrome || head->val != p->val) {
      return false;
    }
    head = head->next;
    return true;
      
  }
};
