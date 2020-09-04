var uniquePaths = function(m, n) {
  var i = 0; j = 0;
  var obj = {};
  function findPath(i, j) {
    if (i > m - 1 || j > n - 1) return 0;
    if (i == m - 1 && j == n - 1) return 1;
    const key = i + '-' + j;
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    } else {
        obj[key] = findPath(i + 1, j) + findPath(i, j + 1);
    }
    return obj[key];
  }
  return findPath(i, j);
};
