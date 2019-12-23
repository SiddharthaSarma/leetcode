use std::cmp;
impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return 0;
        }
        if nums.len() == 1 {
            return nums[0];
        }
        if nums.len() == 2 {
            return cmp::max(nums[0], nums[1]);
        }
        if nums.len() > 2 {
            let mut dp = Vec::new();
            dp.push(nums[0]);
            dp.push(cmp::max(nums[0], nums[1]));
            for i in 2..nums.len() {
                dp.push(cmp::max(nums[i] + dp[i - 2], dp[i - 1]));
            }
            return dp[nums.len() - 1];
        }
        return 0;
    }
}
