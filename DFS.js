// Breadth First Search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (value <= currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  breadFirstSearch() {
    let currentNode = this.root;
    let result = [];
    let queue = [currentNode]; // FILO

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  breadFirstSearchR(result, queue) {
    if (!queue.length) {
      return result;
    }

    let currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadFirstSearchR(result, queue);
  }

  //        9
  //    4       20
  // 1    6   15    170

  inorderDFS() {
    return traverseInOrder(this.root, []);
  }
  // [1, 4, 6, 9, 15, 20, 170]


  preorderDFS() {
    return traversePreOrder(this.root, []);
  }
  // [9, 4, 1, 6, 20, 15, 170]
  

  postorderDFS() {
    return traversePostOrder(this.root, []);
  // [1, 6, 4, 15, 170, 20, 9]
  }

}

function traverseInOrder(node, result) {
    if (node.left) {
        traverseInOrder(node.left, result)
    }
    result.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, result)
    }
    return result
}

function traversePreOrder(node, result) {
    result.push(node.value)
    if (node.left) {
        traversePreOrder(node.left, result)
    }
    if (node.right) {
        traversePreOrder(node.right, result)
    }
    return result
}

function traversePostOrder(node, result) {
    if (node.left) {
        traversePostOrder(node.left, result)
    }
    if (node.right) {
        traversePostOrder(node.right, result)
    }
    result.push(node.value)
    return result
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const myTree = new BinaryTree();
myTree.insert(35);
myTree.insert(20);
myTree.insert(10);
myTree.insert(30);
myTree.insert(39);
myTree.insert(45);
myTree.insert(50);
console.log(JSON.stringify(traverse(myTree.root)));
                                //        35
                                //    20       39
                                // 10   30   45    50
console.log(myTree.breadFirstSearch());
console.log(myTree.breadFirstSearchR([], [myTree.root]));
console.log(myTree.inorderDFS());
                                // [ 10, 20, 30, 35, 39, 45, 50 ]
console.log(myTree.preorderDFS());
                                //  [ 35, 20, 10, 30, 39, 45, 50 ]
console.log(myTree.postorderDFS());
                                //   [ 10, 30, 20, 45, 50, 39, 35 ]