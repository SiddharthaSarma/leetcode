class Solution {
  public:
    void moveZeroes(vector < int > & nums) {
      int count = 0;
      for (int i: nums) {
        if (i) {
          nums[count] = i;
          count++;
        }
      }
      for (int i = count; i < nums.size(); i++) {
        nums[i] = 0;
      }
    }
};
