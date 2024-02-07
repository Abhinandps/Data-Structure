

// Array To Linked List

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    addNode(value) {

        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {

            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }


// Print list in order
    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let listView = ''  
            let curr = this.head
            while(curr){
                listView += ` ${curr.value}`
                curr = curr.next
            }
            console.log(listView);
        }
    }


    // Reverse a List 
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next 
        }
        this.head = prev
    }


    addBegin(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    addEnd(value){
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {

            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }


    removeValue(value){
        if(this.isEmpty()){
            return null
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const value = prev.next
                prev.next = value.next
                this.size--
                return value.value
            }
        }
        return null
    }



    insertNodeAfterFoundX(x,value){
        if(this.isEmpty()) return null
        if(this.head.value===x){
            const node = new Node(value);
            node.next = this.head.next
            this.head.next = node
            this.size++
        }
        else{
            const node = new Node(value);
            let curr = this.head
            while(curr.next && curr.next.value !== x){
                curr = curr.next
            }
            curr = curr.next
           
            if(curr.next){
                node.next = curr.next
                curr.next = node
                this.size++
             }
        }
      
    }



    insertNodeBeforeFoundX(x,value){
        if(this.isEmpty()) return null

        if(this.head.value===x){
            const node = new Node(value);
            node.next = this.head
            this.head= node
            this.size++
        }
        else{
            const node = new Node(value);
            let curr = this.head
            while(curr.next && curr.next.value !== x){
                curr = curr.next
            }
            // console.log(curr.next);
            // curr = curr.next
        
            if(curr.next){
                node.next = curr.next
                curr.next = node
                // console.log(node)
                this.size++
             }
        }
       
    }


}



// Array -> Linked List
const arrayToLinkedList = (arr)=>{
    const list = new LinkedList()
    arr.forEach(item=> list.addNode(item))
    list.addBegin(5)
    list.addEnd(50)
    list.print()
//   console.log(list.removeValue(30));
//     list.print()
 list.insertNodeAfterFoundX(10,100);
//     list.print()
    list. insertNodeBeforeFoundX(10,150)
//     list.print()
//     list.reverse()
//     list.print()

list.print()
}



// Array
const arr = [10,30,20,40]
arrayToLinkedList(arr);

