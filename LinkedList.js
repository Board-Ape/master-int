// Why are linked list better or worse than hash tables or arrays?
// Some sort of order with Linked List

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(20)
console.log(myLinkedList)
myLinkedList.append(30)
console.log(myLinkedList)
myLinkedList.prepend(10);
console.log(myLinkedList)

