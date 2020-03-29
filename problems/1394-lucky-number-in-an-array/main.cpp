class Solution {
  public:
    int findLucky(vector < int > & arr) {
      map < int, int > mp;
      for (int i: arr) {
        ++mp[i];
      }
      int ans = -1;
      for (auto m: mp) {
        if (m.first == m.second) {
          ans = m.first;
        }
      }
      return ans;
    }
};
