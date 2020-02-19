var minSetSize = function(arr) {
  let count = {}
  for (let i = 0; i < arr.length; i++) {
    if (count.hasOwnProperty(arr[i])) {
      count[arr[i]] = count[arr[i]] + 1;
    } else {
      count[arr[i]] = 1;
    }
  }

  const counts = Object.values(count).sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < counts.length; i++) {
    sum += counts[i];
    if (sum >= Math.ceil(arr.length / 2)) {
      return i + 1;
    }
  }
  return 0;
};
