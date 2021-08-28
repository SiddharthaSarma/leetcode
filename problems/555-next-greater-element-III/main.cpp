class Solution {
public:
  int nextGreaterElement(int n) {
    auto str = to_string(n);
    next_permutation(begin(str), end(str));
    auto res = stoll(str);
    return (res > INT_MAX || res <= n) ? -1 : res;
  }
};
