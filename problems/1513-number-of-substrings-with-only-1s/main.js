const numSub = function (s) {
  const mod = 1e9 + 7;
  let count = 0;
  let res = 0;
  for (let val of s) {
    count = val === '1' ? count + 1 : 0;
    res = (res + count) % mod | 0;
  }
  return res;
};
