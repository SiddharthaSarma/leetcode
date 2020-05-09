/*
This solution uses the fact that the negative regions of the matrix will form a "staircase" shape, e.g.:
++++++
++++--
++++--
+++---
+-----
+-----
The solution is to "trace" the outline of the staircase.
*/

const countNegatives = function(grid) {
  let count = 0;
  let n = grid[0].length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count += n - j;
        break;
      }
    }
  }
  return count;
};
