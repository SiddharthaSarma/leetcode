/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const val = x.toString();
  for (let i = 0; i < Math.floor(val.length / 2); i++) {
    if (val[i] !== val[val.length - 1 - i]) return false;
  }
  return true;
};
