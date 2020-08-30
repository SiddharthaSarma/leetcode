class Solution {
public:
  vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
    int maxValue = 0;
    vector<bool> res;
    for (int candie: candies) {
        maxValue = max(maxValue, candie);
    }
    for (int candie: candies) {
        if ((candie + extraCandies) >= maxValue) {
            res.push_back(true);
        } else {
            res.push_back(false);
        }
    }
    return res;
  }
};
