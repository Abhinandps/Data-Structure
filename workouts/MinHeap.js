class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        let i=this.heap.length-1
        this.siftUp(i)
    }

// To Re arrange the value of min heap
    siftUp(i){
        while(i>0){
            let parentIndex = Math.floor((i-1)/ 2)
            if(this.heap[i] < this.heap[parentIndex]){
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            }
            else return
        }
    }


    deleteMin(){
        this.heap[0] = this.heap.pop()
        let i=0
        this.siftDown(i,this.heap.length)
    }

    siftDown(i,n){
        let smallest = i
        let left = 2*i+1
        let right = 2*i+2
        
        if(left < n && this.heap[left] < this.heap[smallest]){
            smallest = left
        }

        if(right < n && this.heap[right] < this.heap[smallest]){
            smallest = right
        }

        if(smallest != i){
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.siftDown(smallest, n)
        }
    }

    getMin(){
        return this.heap[0]
    }



    levelOrder(heap){
        
    }

}


const m = new MinHeap()

//Insertion
    m.insert(10)
    m.insert(40)
    m.insert(60)
    m.insert(5)
    m.insert(20)

//Deletion

    m.deleteMin()
    console.log(m.heap)

// Get Min Value from heap
    console.log(m.getMin())


