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
        let q = [0]
        let list = ''
        while(q.length){
            let curr = q.shift()
            list+=`${heap[curr]} `
            let left = 2*curr+1
            let right = 2*curr+2
            if(heap[left]){
                q.push(left)
            }
            if(heap[right]){
                q.push(right)
            }
        }
        console.log(list);
    }

    buildHeap(arr){
        // build heap
        this.heap = arr
        for(let i=Math.floor((arr.length-1)/2); i>=0; i--){
            this.siftDown(i,arr.length-1)
        }

        //To Sort in Descending Order
        for(let i =arr.length-1; i>0; i--){
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            this.siftDown(0,i)
        }
    }

    


}


const m = new MinHeap()

//Insertion
    m.insert(10)
    m.insert(40)
    m.insert(60)
    m.insert(5)
    m.insert(20)

// Deletion

    m.deleteMin()
    console.log(m.heap)

// Get Min Value from heap
    console.log(m.getMin())

// Build ANd SORT Min Heap

    m.buildHeap([10,5,8,3,1,1,2])

// BFS
    m.levelOrder(m.heap)

