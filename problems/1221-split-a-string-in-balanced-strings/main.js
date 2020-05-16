const balancedStringSplit = function(s) {
  let rCounter = 0;
  let lCounter = 0;
  let result = 0;
  for (char of s) {
    if (char === 'R') rCounter++;
    else lCounter++;

    if (lCounter === rCounter) result++;
  }
  return result;
};
