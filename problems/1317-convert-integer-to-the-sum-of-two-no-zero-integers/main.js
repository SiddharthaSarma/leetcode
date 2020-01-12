const getNoZeroIntegers = function(n) {
  const isContainsZero = (val) => !val.toString().includes('0');

  for (let i = 1; i < n; i++) {
    if (isContainsZero(i) && isContainsZero(n - i)) {
      return [i, n - i];
    }
  }
};
