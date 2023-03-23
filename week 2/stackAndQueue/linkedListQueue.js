

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedListQueue{
    constructor(){
        this.rear = null
        this.front = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.rear = newNode
            this.front = newNode
        }
        else{
           this.rear.next = newNode
           this.rear = newNode
        }
        this.size++
    }

        dequeue(){
            // if(this.isEmpty()) return null
            let item = this.front.value
            this.front = this.front.next
            this.size--
            return item
        }

    print(){
        let temp = this.front
        let list = ''
        while(temp){
            list+=`${temp.value}`
            temp = temp.next
        }
        console.log(list);
    }


}


let list = new LinkedListQueue()

const arr = [4,7,6,]
arr.forEach(v=>list.enqueue(v))

list.print()
console.log(list.dequeue());
list.print()









