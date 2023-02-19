/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const temp = [[root]];
  let i = 0;
  do {
    i++;
    const currNode = temp.shift();
    const tempRes = [];
    const tempNode = [];
    for (let node of currNode) {
      try {
        tempRes.push(node.val);
        if (node.left) {
          tempNode.push(node.left);
        }
        if (node.right) {
          tempNode.push(node.right);
        }
      } catch (e) {
        console.log("error", currNode, root);
      }
    }
    if (tempNode.length) {
      temp.push(tempNode);
    }

    if (i & 1) {
      result.push(tempRes);
    } else {
      result.push(tempRes.reverse());
    }
  } while (temp.length);
  return result;
};
