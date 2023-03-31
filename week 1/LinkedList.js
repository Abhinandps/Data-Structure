


// Singly Linked List

class Node{
    constructor(value){
        this.value = value
        this.next = next
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
list.addNode(15)
list.addNode(15)

list.addNode(25)
list.addNode(25)
list.addNode(25)
list.addNode(25)
list.addNode(25)

list.duplicate()

list.print()



