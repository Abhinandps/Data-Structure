

class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    print(){
        console.log(this.items);
    }
}


let queue = new Queue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

queue.print()
console.log(queue.dequeue());
queue.print()


