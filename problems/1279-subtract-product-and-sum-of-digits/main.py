class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        sum = 0
        product = 1
        while (n > 0):
          sum += n % 10
          product *= n % 10
          n = int(n / 10)
        return product - sum
