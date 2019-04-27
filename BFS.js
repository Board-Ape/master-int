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
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.right
                    }
                }
            } 
        }
        return this
    }

    breadFirstSearch() {
        let currentNode = this.root;
        let result = [];
        let queue = [currentNode]; // FILO

        while (queue.length) {
            currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result;
    }

    breadFirstSearchR(result, queue) {
        if (!queue.length) {
            return result
        }

        let currentNode = queue.shift();
        result.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }

        return this.breadFirstSearchR(result, queue)
    }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const myTree = new BinaryTree()
myTree.insert(35)
myTree.insert(30)
myTree.insert(33)
myTree.insert(40);
myTree.insert(20);
myTree.insert(10);
myTree.insert(39);
myTree.insert(50);
console.log(JSON.stringify(traverse(myTree.root)));
console.log(myTree.breadFirstSearch())
console.log(myTree.breadFirstSearchR([], [myTree.root]));