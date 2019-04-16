// Why are linked list better or worse than hash tables or arrays?
// Some sort of order with Linked List

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

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
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value) {
        if (index >= index.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToindex(index)

        newNode.next = leader.next
        leader.next = newNode
    }
    
    traverseToindex(index) {
        let currentNode = this.head
        let counter = 1
        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        if (index > this.length) {
            return 'Outside of range'
        }
        const leader = this.traverseToindex(index - 1);
        let unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }
}

const myLinkedList = new LinkedList(20)
console.log(myLinkedList)
myLinkedList.append(30)
console.log(myLinkedList)
myLinkedList.prepend(10);
myLinkedList.prepend(60);

console.log(myLinkedList.printList());
myLinkedList.insert(2, 100)
console.log(myLinkedList.printList());
myLinkedList.remove(2)
console.log(myLinkedList.printList());
