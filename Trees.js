// DOM is a Tree Data Structure 
// Data structure that has a hierarchical structure
// Various Parents connected to a root node with accompanying children
// Chess engines previously used a tree data structure to create and
    // execute move possibilities

function BinaryTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.head

            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }   
        }
    }

    lookup(value) {
        let currentNode = this.head;

        while (currentNode && currentNode.value !== value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        if (!currentNode) {
            return "This Node Does Not Exist"
        }

        return true
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;

}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))