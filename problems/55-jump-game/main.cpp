class Solution {
public:
  Solution() {
    ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
  }
  bool canJump(vector<int>& nums) {
    int size = nums.size();
    int result = 0;
    for (int i = 0; i < size - 1; i++) {
      if (i > result) {
        break;
      }
      if (nums[i] != 0) {
        result = max(i + nums[i], result);
      }
    }
    return result >= size - 1;
  }
};
