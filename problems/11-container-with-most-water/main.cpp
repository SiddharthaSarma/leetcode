class Solution {
  public:
    int maxArea(vector <int> & height) {
      int res = 0;
      int l = 0;
      int r = height.size() - 1;
      while (l < r) {
        int val = min(height[l], height[r]);
        res = max(res, val * (r - l));
        if (height[l] < height[r]) {
          l++;
        } else {
          r--;
        }
      }
      return res;
    }
};
