const findLucky = function(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  let answer = -1;
  for (let obj in map) {
    if (parseInt(obj, 10) === map[obj]) {
      answer = map[obj];
    }
  }
  return answer;
};
