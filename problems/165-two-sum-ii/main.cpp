class Solution {
public:
  vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0;
    int right = size(numbers) - 1;
    vector<int> result;
    while (left != right) {
      if (numbers[left] + numbers[right] > target) {
         right--;
      } else if (numbers[left] + numbers[right] < target) {
         left++;
      } else {
         break;
      }
    }
    result.push_back(left + 1);
    result.push_back(right + 1);
    return result;
  }
};
