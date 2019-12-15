/**************************
      SOLUTION - 1
***************************/
const getDecimalValue = function(head) {
  const values = [];
  let sum = 0;
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  for (let i = values.length - 1; i >= 0; i--) {
    sum += Math.pow(2, (values.length - 1 - i)) * values[i];
  }
  return sum;
};



/**************************
      SOLUTION - 2
***************************/
const getDecimalValue = function(head) {
  let sum = 0;
  while (head) {
    sum = sum * 2 + head.val;
    head = head.next;
  }
  return sum;
};
