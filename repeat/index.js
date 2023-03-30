

class MaxHeap{
    constructor(){
        this.heap = []
    }

    // [ 50,60 ]
    insert(value){
        this.heap.push(value)
        let i = this.heap.length-1
        while(i>0){
            let parentIndex = Math.floor((i-1) / 2)
            if(this.heap[i] > this.heap[parentIndex]){
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            }
            else {
                return
            }
        }
    }
}


const h = new MaxHeap()
h.insert(10)
h.insert(20)
h.insert(30)


console.log(h.heap);

