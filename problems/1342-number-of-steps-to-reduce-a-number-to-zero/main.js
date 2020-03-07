// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
const numberOfSteps = function(num) {
  let count = 0;
  const recursion = () => {
    if (!num) {
      return count;
    }
    if (num & 1) {
      num--;
      count++;
    } else {
      num = (num / 2) | 0;
      count++;
    }
    return recursion();
  }
  return recursion();
};
