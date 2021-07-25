class Solution {
public:
  bool areOccurrencesEqual(string s) {
    map<char, int> m;
    for (auto& c: s) {
      m[c]++;
    }
    int count = m[s[0]];
    for (auto& val: m) {
      if (count != val.second) {
        return false;
      }
    }
    return true;
  }
};
