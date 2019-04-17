class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.length === 0) {
            return "No items"
        }

        return this.top
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;

            return this
        } else {
            const pointer = this.top;
            this.top = newNode
            this.top.next = pointer
        }

        this.length++
        return this
    }

    pop() {
        if (!this.top) {
            return null
        } 
        if (this.top === this.bottom) {
            this.bottom = null
        }
        const pointer = this.top
        point
    }
}

const myStack = new Stack()
console.log(myStack.peek())
myStack.push(10)
myStack.push(20)
myStack.push(30)
console.log(myStack.peek());
myStack.pop()
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
