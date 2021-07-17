class Solution {
public:
  int findLeftIndex(vector<int>& v, int target) {
    int index = -1;
    int low = 0;
    int high = v.size() - 1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (v[mid] >= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
      if (v[mid] == target) {
        index = mid;
      }
    }
    return index;
  }

  int findRightIndex(vector<int>&v, int target) {
    int index = -1;
    int low = 0;
    int high = v.size() - 1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (v[mid] <= target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      if (v[mid] == target) {
        index = mid;
      }
    }
    return index;
  }
  vector<int> searchRange(vector<int>& nums, int target) {
      vector<int> result(2, -1);
      result[0] = findLeftIndex(nums, target);
      result[1] = findRightIndex(nums, target);
      return result;
  }
};
