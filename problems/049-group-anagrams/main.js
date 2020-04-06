/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const output = strs.reduce((a, c) => {
    const val = c.split('').sort().join('');
    if (a.keys.hasOwnProperty(val)) {
      a.values[a.keys[val]].push(c);
    } else {
      a.keys[val] = Object.keys(a.keys).length;
      a.values[a.keys[val]] = [c];
    }
    return a;
  }, {
    keys: {},
    values: []
  });
  return output.values;
};
