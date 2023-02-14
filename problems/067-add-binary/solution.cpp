// https://leetcode.com/problems/add-binary/description/
class Solution {
  public: void padZeros(string & str, int padSize) {
    int len = str.size();
    for (int i = 0; i < padSize; i++) {
      str = "0" + str;
    }
  }
  string addBinary(string a, string b) {
    string result = "";
    int maxSize = max(a.size(), b.size());
    padZeros(a, maxSize - a.size());
    padZeros(b, maxSize - b.size());
    int carry = false;
    for (int i = maxSize - 1; i >= 0; i--) {
      if (a[i] == '1' && b[i] == '1') {
        string val = carry ? "1" : "0";
        result = val + result;
        carry = true;
      } else if (a[i] == '1' || b[i] == '1') {
        string val = "1";
        if (carry) {
          val = "0";
          carry = true;
        }
        result = val + result;
      } else {
        string val = carry ? "1" : "0";
        carry = false;
        result = val + result;
      }
    }
    if (carry) {
      result = "1" + result;
    }
    return result;
  }
};

// solution 2
class Solution {
  public: string addBinary(string a, string b) {
    string result = "";
    int maxSize = max(a.size(), b.size());
    if (a.size() > b.size()) b = result.append(maxSize - b.size(), '0') + b;
    if (b.size() > a.size()) a = result.append(maxSize - a.size(), '0') + a;
    result = "";
    int carry = 0;
    for (int i = maxSize - 1; i >= 0; i--) {
      int aVal = a[i] - '0';
      int bVal = b[i] - '0';
      int sum = aVal + bVal + carry;
      string val = to_string(sum % 2);
      result = val + result;
      carry = sum / 2;
    }
    if (carry) {
      result = "1" + result;
    }
    return result;
  }
};

