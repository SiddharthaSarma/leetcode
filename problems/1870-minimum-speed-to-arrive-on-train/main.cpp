class Solution {
public:
  int minSpeedOnTime(vector<int>& dist, double hour) {
    int result = -1;
    int low = 0;
    int high = 10000000;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      double sum = 0;
      for (int i = 0; i < dist.size() - 1; i++) {
        sum += ceil((double) dist[i] / mid);
      }
      sum = sum + (double) dist[dist.size() - 1] / mid;
      if (sum > hour) {
        low = mid + 1;
      } else {
        result = mid;
        high = mid - 1;
      }
    }
    return result;
  }
};
