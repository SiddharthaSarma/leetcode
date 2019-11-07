class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    let current = this.head;

    if (!this.head) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return node;
  }
}

const traverseList = function(l1, l2) {
  var node1 = l1;
  var node2 = l2;
  var result = new LinkedList();
  var carry = 0;
  while (node1 && node2) {
    var sum = node1.val + node2.val + carry;
    var remainder = sum % 10;
    var quotient = Math.floor(sum / 10);
    result.add(remainder);
    if (quotient) {
      carry = quotient;
    } else {
      carry = 0;
    }

    if (node1.next && node2.next) {
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1.next && !node2.next) {
      node1 = node1.next;
      node2 = {
        val: 0
      };
    } else {
      node1 = {
        val: 0
      };
      node2 = node2.next;
    }

  }
  if (carry) {
    result.add(carry);
  }
  return result.head;
}

const addTwoNumbers = function(l1, l2) {
  return traverseList(l1, l2);
};
