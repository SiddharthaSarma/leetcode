const oddCells = function(n, m, indices) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(new Array(m).fill(0));
  }
  for (let j = 0; j < indices.length; j++) {
    let x = indices[j][0];
    let y = indices[j][1];
    for (let i = 0; i < m; i++) arr[x][i]++;
    for (let k = 0; k < n; k++) arr[k][y]++;
  }
  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      count += arr[i][j] % 2;
    }
  }
  return count;
};
