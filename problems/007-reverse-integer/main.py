class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        output = 0
        while (abs(x) > 0):
          output = (output* 10) + (abs(x) % 10)
          x = int(x / 10)
        return sign * output if (output >= (-2)**31) & (output <= 2**31-1) else 0
