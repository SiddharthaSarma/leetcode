class Solution {
public:
  vector<string> topKFrequent(vector<string>& words, int k) {
    vector<string> result;
    unordered_map<string, int> freq;
    for (auto& word: words) {
      freq[word]++;
    }
    auto compare = [&](const pair<string, int>& a, const pair<string, int>& b) {
      return a.second < b.second || (a.second == b.second && a.first > b.first);
    };
    typedef priority_queue<pair<string, int>, vector<pair<string, int>>, decltype(compare)> priority_t;
    priority_t pq(compare);
    for (auto w: freq) {
      pq.emplace(w.first, w.second);
    }
    for (int i = 0; i < k; i++) {
      result.push_back(pq.top().first);
      pq.pop();
    }
    return result;
  }
};
