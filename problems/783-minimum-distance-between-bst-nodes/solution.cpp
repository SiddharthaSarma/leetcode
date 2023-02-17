// https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
  public: vector < int > list = {};
  void inorderTraversal(TreeNode * root) {
    if (!root) return;
    inorderTraversal(root -> left);
    list.push_back(root -> val);
    inorderTraversal(root -> right);
  }
  int minDiffInBST(TreeNode * root) {
    inorderTraversal(root);
    int minDistance = INT_MAX;
    for (int i = 0; i < list.size() - 1; i++) {
      minDistance = min(minDistance, list[i + 1] - list[i]);
    }
    return minDistance;
  }
};
