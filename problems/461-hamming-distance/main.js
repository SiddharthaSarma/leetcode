const hammingDistance = function (x, y) {
  let res = 0;
  while (x > 0 || y > 0) {
    const val = x % 2;
    const val2 = y % 2;
    if (val !== val2) res++;
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return res;
};
