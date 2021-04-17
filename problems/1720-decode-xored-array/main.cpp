class Solution {
public:
    vector<int> decode(vector<int>& encoded, int first) {
        vector<int> res;
        res.push_back(first);
        for(int val: encoded) {
          int r = val ^ first;
          res.push_back(r);
          first = r;
        }
      return res;
    }
};
