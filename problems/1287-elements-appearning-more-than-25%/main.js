const findSpecialInteger = function(arr) {
  const list = {}
  for (let i = 0; i < arr.length; i++) {
    list[arr[i]] = !list[arr[i]] ? 1 : ++list[arr[i]];
    if (list[arr[i]] / arr.length > 0.25) {
      return arr[i];
    }
  }
};
