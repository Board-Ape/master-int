class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (!this.length) {
            return 'Nothing in the queue'
        }
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.length++;

        return this
    }

    dequeue() {
        if (!this.first) {
            return "Nothing in the queue";
        }

        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.length--
        
        return this
    }   
}

const myQueue = new Queue()
console.log(myQueue.peek())
myQueue.enqueue(10)
console.log(myQueue.peek());
myQueue.enqueue(20);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());