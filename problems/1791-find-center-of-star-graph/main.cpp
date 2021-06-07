class Solution {
public:
    map<int, int> adjList;
    int findCenter(vector<vector<int>>& edges) {
      for (auto v: edges) {
        adjList[v[0]]++;
        adjList[v[1]]++;
      }
      for (auto& list: adjList) {
        if (list.second == adjList.size() - 1) {
          return list.first;
        }
      }
      return 0;
    }
};
