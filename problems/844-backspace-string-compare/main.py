class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        first = []
        second = []
        for i in range(0, len(S)):
          if (S[i] != '#'):
            first.append(S[i])
          elif len(first):
            first.pop()
        
        for i in range(0, len(T)):
          if (T[i] != '#'):
            second.append(T[i])
          elif len(second):
            second.pop()
        return "".join(first) == "".join(second)
