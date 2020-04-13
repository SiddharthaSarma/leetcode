class Solution {
  public:
    int lastStoneWeight(vector < int > & stones) {
      priority_queue < int > pq;
      for (int s: stones) pq.push(s);
      int first, second;
      while (pq.size() > 1) {
        first = pq.top();
        pq.pop();
        second = pq.top();
        pq.pop();
        if (first > second) {
          first -= second;
          pq.push(first);
        }
      }
      if (pq.empty()) return 0;
      else return pq.top();
    }
};
