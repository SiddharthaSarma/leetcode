class Solution {
public:
  long long arrangeCoins(int n) {
    int low = 0;
    int high = n;
    while (low <= high) {
      long long mid = low + (high - low) / 2;
      long long k = (mid * (mid + 1)) / 2;
      if (k == n) {
        return mid;
      } else if (n > k) {
        low = mid + 1; 
      } else {
        high = mid - 1;
      }
    }
    return high;
  }
};
