// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
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
  public: int minDistance = INT_MAX;
  TreeNode * prevNode;
  void inorderTraversal(TreeNode * root) {
    if (!root) return;
    inorderTraversal(root -> left);
    if (prevNode) {
      minDistance = min(minDistance, root -> val - prevNode -> val);
    }
    prevNode = root;
    inorderTraversal(root -> right);
  }
  int getMinimumDifference(TreeNode * root) {
    inorderTraversal(root);
    return minDistance;
  }
};
