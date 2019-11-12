/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const preOrderTraverseNode = function(node, cb) {
  if (!node) {
    return;
  }
  // Root --> Left --> Right
  cb(node.val);
  preOrderTraverseNode(node.left, cb);
  preOrderTraverseNode(node.right, cb);
};
const rangeSumBST = function(root, L, R) {
  let sum = 0;
  preOrderTraverseNode(root, (val) => {
    if (val >= L && val <= R) {
      sum += val;
    }
  });
  return sum;
};
