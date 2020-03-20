const majorityElement = function(nums) {
  let res = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    nums[res] === nums[i] ? count++ : count--;
    if (!count) {
      res = i;
      count = 1;
    }
  }

  return nums[res];

};
