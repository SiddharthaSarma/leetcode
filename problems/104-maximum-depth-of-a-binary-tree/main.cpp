class Solution {
public:
    int maxDepth(TreeNode* root) {
       if (!root) {
         return 0;
       }
        queue<TreeNode*> q;
        int depth = 0;
        q.push(root);
        while (!q.empty()) {
          int size = q.size();
          depth++;
          for (int i = 0; i < size; i++) {
            TreeNode* t = q.front();
            q.pop();
            if (t->left) q.push(t->left);
            if (t->right) q.push(t->right);
          }
        }
        return depth;
    }
};
