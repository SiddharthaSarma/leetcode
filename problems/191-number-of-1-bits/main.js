// Brian Kernighan’s Algorithm
const hammingWeight = function(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
};
