class Solution {
public:
  bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) {
      return false;
    }
    size_t m = matrix.size();
    size_t n = matrix[0].size();
    int low = 0;
    int high = m * n - 1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      int ele = matrix[mid / n][mid % n];
      if (ele < target) {
        low = mid + 1;
      } else if (ele > target) {
        high = mid - 1;
      } else {
        return true;
      }
    }
    return false;
  }
};
