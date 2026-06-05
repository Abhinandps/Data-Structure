


// Singly Linked List

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    addNode(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }


    duplicate(){
        let temp = this.head
        while(temp){
            let curr = temp
            while(curr.next != null){
                if(curr.value === curr.next.value){
                    curr.next = curr.next.next
                }
                else{
                    curr = curr.next
                }
                 temp = temp.next
            }
            console.log(curr);

        }
    }

    print(){
        let curr = this.head
        let list = ''
        while(curr){
            list+=` ${curr.value}`
            curr = curr.next
        }
        console.log(list);

    }
}

const list = new LinkedList()

list.addNode(5)
list.addNode(1)
list.addNode(10)
list.addNode(5)
list.addNode(10)

list.addNode(11)

list.addNode(12)



// list.addNode(15)
// list.addNode(15)

// list.addNode(25)
// list.addNode(25)
// list.addNode(25)
// list.addNode(25)
// list.addNode(25)

// list.duplicate()

list.print()



// Updated Singly Linked List


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this. tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value){
         const node = new Node(value);
        
        node.next = this.head;
        this.head = node;

        if(!this.tail){
            this.tail = node
        }
        this.length++;
    }


    delete(value){
          //this list is empty
        if(!this.head) return null

        // the value is at the head node
        if(this.head.value === value){
            this.head = this.head.next;
            this.length--;
            return;
        }

        // search for the value in the rest of the list
        let curr = this.head
        let prev= null

        while(curr && curr.value !== value){
            prev = curr
            curr = curr.next
        }

        // if the value was found, bypass the current role

        if(curr){
            prev.next = curr.next;
            this.length--;
        }
    }

    removeDuplicates(){
        if(!this.head) return;

        const seen = new Set();

        let curr = this.head;
        let prev = null;

        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next;
                this.length--;
            }else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head

        // if we have tail keep oldhead
        const oldHead = this.head;
        
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr
            curr = next;
        }
        this.head = prev;
        this.tail = oldHead;
    }

    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast.next && fast.next.next){
            slow = slow. next;
            fast = fast.next.next;
        }

        return slow;
    }

    print(){
        let curr = this.head;
        let list = "";
        while(curr){
            list+=`${curr.value} `
            curr = curr .next;
        }
        console.log(list)
    }
}

const list = new SinglyLinkedList();

list.append(10);
// list.append(10);
list.append(20);
// list.append(20);
// list.append(20);
list.append(30);
// list.append(40);
// list.append(50);
// list.append(60);
// list.append(30);
// list.append(30);
// list.delete(20);

// list.removeDuplicates();
// list.reverse();
list.print();
console.log(list.findMiddle())

list.print();





