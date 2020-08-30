// using map
class Solution {
public:
  string restoreString(string s, vector<int>& indices) {
    string res = "";
    map<int, string> ms;
    for (int i = 0; i < indices.size(); i++) {
      ms[indices[i]] = s[i];
    }
    for (auto i: ms) {
      res += i.second;
    }
    return res;
  }
};



// optimised way
class Solution {
public:
  string restoreString(string s, vector<int>& indices) {
    string res = s;
    for (int i = 0; i < indices.size(); i++) {
      res[indices[i]] = s[i];
    }
    return res;
  }
};
