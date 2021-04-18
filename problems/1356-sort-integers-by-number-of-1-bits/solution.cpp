class Solution {
public:
  static bool compare(const int& a, const int& b) {
      int acount = bitset<32>(a).count();
      int bcount = bitset<32>(b).count();
      if (acount != bcount) {
        return acount < bcount;
      }
      return a < b;
    }
    vector<int> sortByBits(vector<int>& arr) {
        sort(arr.begin(), arr.end(), compare);
      return arr;
    }
};
