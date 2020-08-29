class Solution {
public:
  int missingNumber(vector<int>& nums) {
    int result = 0;
    for (int i = 1; i <= nums.size(); i++) {
      result ^= nums[i -1] ^ i;
    }
    return result;
  }
};
static const auto io_accelerator = []() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}();
