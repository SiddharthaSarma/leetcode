const postorder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let n of node.children) {
      stack.push(n);
    }
  }

  return result.reverse();
};
