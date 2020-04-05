/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function(n) {
  const map = {};
  const solve = (j) => {
    let ret = 0;
    for (let k = j; k > 0; k = (k / 10) | 0) ret += (k % 10) | 0;
    return ret;
  }
  for (let i = 1; i <= n; i++) {
    const val = solve(i);
    if (map[val] === undefined) map[val] = 0;
    map[val]++;
  }
  let result = 0;
  for (let val in map) result = Math.max(result, map[val]);

  let count = 0;
  for (let val in map) count += map[val] === result;
  return count;
};
