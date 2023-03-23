
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class MyQueue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }
        else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()) return null
        let item = this.front.value
        this.front = this.front.next
        this.size--
        return item
    }

    peek(){
        return this.front.value
    }

    print(){
        let list = ''
        while(this.front){
            list += `${this.front.value} `
            this.front = this.front.next
        }
        console.log(list);
    }

    getSize(){
        return this.size
    }

}


class Stack{
    constructor(){
        this.queue = new MyQueue()
    }

    push(value){
        let rotate = this.queue.getSize()
        this.queue.enqueue(value)

        while(rotate){
            this.queue.enqueue(this.queue.dequeue())
            rotate--;
        }
    }

    pop(){
        return this.queue.dequeue()
    }

    print(){
        return this.queue.print()
    }

    top(){
        return this.queue.peek()
    }
    empty(){
        return this.queue.empty()
    }

}


const stack = new Stack()
stack.push(5);
stack.push(6);
stack.push(7);
stack.pop()
stack.print()




