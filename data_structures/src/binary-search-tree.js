const checkBalanced = (rootNode) => {
  let leavesLeft = 0;
  let leavesRight = 0;

  function countLeaves(node) {
    let count = 1;
    if (node.left) {
      count++;
      countLeaves(node.left, count);
    }
    if (node.right) {
      count++;
      countLeaves(node.right, count);
    }
    return count;
  }

    if (rootNode.right) leavesRight = countLeaves(rootNode.right, leavesRight);
    if (rootNode.left) leavesLeft = countLeaves(rootNode.left, leavesLeft);
    return leavesLeft === leavesRight;
};

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }
}

module.exports = {
  BinarySearchTree,
  checkBalanced,
};