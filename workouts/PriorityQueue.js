
class PriorityQueue {
    constructor() {
        this.heap = []
    }

    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChildIndex(i) {
        return 2 * i + 1
    }
    
    rightChildIndex(i) {
        return 2 * i + 2
    }


    enqueue(value, priority) {
        this.heap.push({ value, priority })
        let i = this.heap.length - 1
        while (i > 0) {
            let parentIndex = this.parentIndex(i)
            if (this.heap[i].priority < this.heap[parentIndex].priority) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            }
            else return
        }
    }

    dequeue() {
        if (this.heap.length === 0) {
            return null
        }
        else if (this.heap.length === 1) {
            return this.heap.pop().value
        }
        else {
            const min = this.heap[0].value
            this.heap[0] = this.heap.pop()
            let i = 0
            this.shiftDown(i, this.heap.length - 1)
            return min
        }

    }

    shiftDown(i, n) {
        let smallest = i
        let left = this.leftChildIndex(i)
        let right = this.rightChildIndex(i)

        if (left < n && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left
        }

        if (right < n && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right
        }

        if (smallest != i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.shiftDown(smallest, n)
        }
    }


    levelOrder(heap){
        let q =[0]
        let list =''
        while(q.length){
            let curr = q.shift()
            list+=`${heap[curr].value}\n`
            let left = this.leftChildIndex(curr)
            let right = this.rightChildIndex(curr)

            if(heap[left]){
                q.push(left)
            }

            if(heap[right]){
                q.push(right)
            }

        }
        console.log(list);

    }

    getMin(){
        return this.heap[0].value
    }


}

const pq = new PriorityQueue()

// Priority Insertion

    pq.enqueue("Task 1", 3)
    pq.enqueue("Task 2", 1)
    pq.enqueue("Task 3", 2)
    pq.enqueue("Task 4", 0)

// Priority Deletion

    console.log(pq.dequeue()); // Task 2
    console.log(pq.dequeue()); // Task 3
    console.log(pq.dequeue()); // Task 1

// pq.levelOrder(pq.heap)

console.log(pq.getMin()); // Task 1


console.log(pq.heap); // [{ value: 'Task 1'}, priority:3 }]
