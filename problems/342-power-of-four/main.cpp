class Solution {
public:
    bool isPowerOfTwo(int n) {
      return n > 0 && !(n & n - 1);
    }
    int checkBit(int n) {
      int result = 0;
      int counter = 0;
      while (true) {
        counter++;
        result =  n & 1;
        if (result) {
          break;
        }
        n >>= 1;
      }
      return counter;
    }
    bool isPowerOfFour(int n) {
        if (isPowerOfTwo(n)) {
          int val = checkBit(n);
          return val & 1;
        } 
      return false;
    }
};
