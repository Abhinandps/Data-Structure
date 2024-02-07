

class Node{
    constructor(value){
        this.prev=null
        this.value = value
        this.next = null
    }
}


class LinkedList{

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
            node.prev = this.tail
            this.tail = node
           
        }
        console.log(node);
        this.size ++
    }


    print(){
        if(this.isEmpty()){
            return null
        }

        let curr = this.head
        let listView =''
        while(curr){
            listView+= ` ${curr.value}`
            curr = curr.next
        }
        console.log(listView);
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }

        let curr = this.tail
        let listView =''
        while(curr){
            listView+= ` ${curr.value}`
            curr = curr.prev
        }
        console.log(listView);
    }

    deleteFront(){
        if(this.isEmpty()){
            return null
        }
        this.head = this.head.next
        this.head.prev=null
        console.log(this.head);
        this.size--
    }

    deleteEnd(){
        this.tail = this.tail.prev
        this.tail.next=null
        console.log(this.tail);
    }

}







const list = new LinkedList()

list.addNode(5);
list.addNode(15);
list.print()
// list.reverse()
// list.deleteFront()
list.deleteEnd()
list.print()


