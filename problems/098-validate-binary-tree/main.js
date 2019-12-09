const isValidBST = function(root) {

  const helper = (node, lower, upper) => {
    if (!node) {
      return true;
    }

    if (lower >= node.val || node.val >= upper) {
      return false;
    }

    if (!helper(node.right, node.val, upper)) {
      return false;
    }

    if (!helper(node.left, lower, node.val)) {
      return false;
    }


    return true;
  }
  return helper(root, -Infinity, +Infinity);
};
