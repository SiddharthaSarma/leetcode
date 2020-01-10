const productExceptSelf = function(nums) {
  const res = [];
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }
  let r = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * r;
    r *= nums[i];
  }
  return res;
};
