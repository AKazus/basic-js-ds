const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = node;
      return;
    }
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (node.data < currTreeNode.data) {
        if (!currTreeNode.left) {
          currTreeNode.left = node;
          return;
        }
        currTreeNode = currTreeNode.left;
      } else {
        if (!currTreeNode.right) {
          currTreeNode.right = node;
          return;
        }
        currTreeNode = currTreeNode.right;
      }
    }
    return;
  }

  has(data) {
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (currTreeNode.data === data) {
        return true;
      } else if (data < currTreeNode.data) {
        currTreeNode = currTreeNode.left
      } else {
        currTreeNode = currTreeNode.right
      }
    }
    return false;
  }

  find(data) {
    let currTreeNode = this.treeRoot;
    while (currTreeNode) {
      if (currTreeNode.data === data) {
        return currTreeNode;
      } else if (data < currTreeNode.data) {
        currTreeNode = currTreeNode.left
      } else {
        currTreeNode = currTreeNode.right
      }
    }
    return null;
  }

  remove(data) {
    removeNode(this.treeRoot, data);
    function minNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    function removeNode(node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let tempTreeNode = minNode(node.right);
        node.data = tempTreeNode.data;
        node.right = removeNode(node.right, tempTreeNode.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
  }

  min() {
    let minTreeNode = this.treeRoot;
    while (minTreeNode.left) {
      minTreeNode = minTreeNode.left;
    }
    return minTreeNode.data;
  }

  max() {
    let maxTreeNode = this.treeRoot;
    while (maxTreeNode.right) {
      maxTreeNode = maxTreeNode.right;
    }
    return maxTreeNode.data;
  }
}

module.exports = {
  BinarySearchTree
};