class Solution {
public:
  int numIdenticalPairs(vector<int>& nums) {
    int res = 0;
    unordered_map<int, int> umap;
    for (int a: nums) {
      res += umap[a]++;
    }
    return res;
  }
};
