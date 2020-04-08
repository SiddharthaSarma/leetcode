// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/

const countElements = function(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = 1;
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] + 1]) count++;
  }
  return count;
};
