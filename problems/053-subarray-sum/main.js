var maxSubArray = function(nums) {
  const maxes = Array(nums).fill(Number.NEGATIVE_INFINITY);
  let maximum = nums[0];
  maxes[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maxes[i - 1] <= 0) {
      maxes[i] = nums[i];
    } else {
      maxes[i] = maxes[i - 1] + nums[i];
    }
    maximum = Math.max(maximum, maxes[i]);
  }
  return maximum;
};
