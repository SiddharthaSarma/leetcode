class Solution:
    def fib(self, N: int) -> int:
        a = 0
        b = 1
        if (N == 0):
          return a
        if (N == 1):
          return b
        
        for _ in range(2, N + 1):
          value = a + b
          
          a = b
          b = value
          
        return value
