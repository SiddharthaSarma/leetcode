class Solution {
public:
  int fibonacci(int n, vector<int>& dp) {
    if (n <= 1)
      return n;
    if (dp[n] != -1)
      return dp[n];
    dp[n] = fibonacci(n - 1, dp) + fibonacci(n - 2, dp);
    return dp[n];
  }
  int fib(int N) {
    vector<int> dp(N + 1, -1);
    return fibonacci(N, dp);
  }
};
