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
}

const myLinkedList = new LinkedList(20)
console.log(myLinkedList)
