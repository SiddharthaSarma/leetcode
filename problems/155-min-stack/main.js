/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.arr = [];
  this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x);
  if (this.min > x) {
    this.min = x;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop();
  let min = Infinity;
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] < min) min = this.arr[i];
  }
  this.min = min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};
