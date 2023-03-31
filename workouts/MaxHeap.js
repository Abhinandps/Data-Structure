

class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        let i = this.heap.length-1
        this.heapifyUp(i)
    }

    heapifyUp(i){
        while(i>0){
            let parentIndex = Math.floor((i-1)/2)
            if(this.heap[i] > this.heap[parentIndex]){
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            }
            else{
                return
            }
        }
    }

    levelOrder(heap){
        let q = [0]
        let list = ''
        while(q.length){
            let curr = q.shift()
            list+=` ${heap[curr]}`
            let left = 2*curr +1
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

    deleteMax(){
        this.heap[0] = this.heap.pop()
        let i =0
        this.heapify(i,this.heap.length)
    }

    buildHeap(arr){
        this.heap = arr
        for(let i=Math.floor((arr.length-1)/2); i>=0; i--){
            this.heapify(i,arr.length)
        }

        // heap sort
        for(let i=arr.length-1; i>0; i--){
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            // index = 0, length = i
            this.heapify(0,i)

        }
    }
 
    heapify(i,n){
        let largest = i
        let left = 2*i+1
        let right = 2*i+2

        if(left < n && this.heap[left] > this.heap[largest]){
            largest = left
        }
        
        if(right < n && this.heap[right] > this.heap[largest]){
            largest = right
        }

        if(largest != i){
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            this.heapify(largest,n)
        }
    }

    getMax(){
        return this.heap[0]
    }


    
}


const h = new MaxHeap()

// INSERT 5 VALUES
// -----------------

    h.insert(10)
    h.insert(20)
    h.insert(120)
    h.insert(220)
    h.insert(200)
    h.insert(30)


    
// To Print - BFS
    h.levelOrder(h.heap)

// Delete Maximum Value 
    h.deleteMax()

// Get Max Value From Heap

    console.log(h.getMax());

// Build Heap Using set of array

    h.buildHeap([10,20,30,40,50])
    
    console.log(h.heap);
    

