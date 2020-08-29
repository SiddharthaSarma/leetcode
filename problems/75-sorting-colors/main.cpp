class Solution {
public:
  void sortColors(vector<int>& nums) {
    int l = 0;
    int m = 0;
    int h = nums.size() - 1;
    while(m <= h) {
      if (nums[m] == 0) {
        int val = nums[l];
        nums[l] = nums[m];
        nums[m] = val;
        l++;
        m++;
        continue;
      }
      if (nums[m] == 1) {
        m++;
        continue;
      }
      if (nums[m] == 2) {
        int val = nums[h];
        nums[h] = nums[m];
        nums[m] = val;
        h--;
        continue;
      }
    }
  }
};
