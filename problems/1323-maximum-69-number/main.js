/*******************
    SOLUTION - 1
*******************/
const maximum69Number = function(num) {
  let str = num.toString();
  let result = '';
  let found = false;
  for (let i = 0; i < str.length; i++) {
    if (!found && str[i] === '6') {
      result += '9';
      found = true;
    } else {
      result += str[i];
    }
  }
  return result;
};

/*******************
    SOLUTION - 2
*******************/
const maximum69Number = function(num) {
  return num.toString().replace('6', '9');
};
