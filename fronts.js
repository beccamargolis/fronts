class Node {
    constructor(val) {
        this.value = val;
        this.next = null;              
    }
}

class SLL {
    constructor() {
        this.head = null; // "this" refers to the instance of the SLL class, creating an empty list so the head is null
    }

    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(val) {
        var new_node= new Node(val);
    if(!this.head){
        this.head=new_node; // makes the new node the head of the list
        return this;
    }
    new_node.next=this.head;
    this.head=new_node;
    return this;
    }

    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        if (this.head == null) { // checks if the list is empty and there is nothing to remove
            return this.head;
        }
        var removedNode = this.head; // creating a variable to hold the node we want to remove
        this.head = removedNode.next; // make the second node into the head node
        removedNode.next = null; // removing the connection of the node to the rest of the list
        return this.head;
    }

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }
}

var mySLL = new SLL(); // creating an empty list to start
console.log(mySLL.front());
mySLL.addFront(11);
mySLL.addFront(22);
console.log(mySLL.front());
mySLL.removeFront();
console.log(mySLL.front());