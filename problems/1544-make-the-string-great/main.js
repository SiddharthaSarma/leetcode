const makeGood = function (s) {
  let stack = [];
  for (let v of s) {
    const value = stack[stack.length - 1];
    if (
      value &&
      ((value >= "a" && value <= "z" && v == value.toUpperCase()) ||
        (value >= "A" && value <= "Z" && v == value.toLowerCase()))
    ) {
      stack.pop();
    } else {
      stack.push(v);
    }
  }
  return stack.join("");
};
