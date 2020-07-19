class Solution {
  public:
    int numWaterBottles(int numBottles, int numExchange) {
      int sum = numBottles;
      while (numBottles >= numExchange) {
        int quo = numBottles / numExchange;
        sum += quo;
        numBottles = quo + numBottles % numExchange;
      }
      return sum;
    }
};
