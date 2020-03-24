const findMaxLength = function(nums) {
  let hashMap = {};
  let temp = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += !nums[i] ? -1 : 1;
    if (!temp) {
      maxLength = i + 1;
    } else if (hashMap.hasOwnProperty(temp)) {
      const diff = i - hashMap[temp];
      maxLength = maxLength < diff ? diff : maxLength;
    } else {
      hashMap[temp] = i;
    }
  }
  return maxLength;
};
