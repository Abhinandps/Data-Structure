

class MaxHeap{
    constructor(){
        this.heap = []
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }
 
    lChild(i) {
        return 2 * i + 1;
    }
 
    rChild(i) {
        return 2 * i + 2;
    }

   insert(value){
    this.heap.push(value)
    let i = this.heap.length-1
    while(i>0){
        let parentIndex = this.parent(i)
        if(this.heap[i] > this.heap[parentIndex]){
            [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
            i = parentIndex
        }
        else return
    }
   }

   deleteMax(){
    if(this.isEmpty()) return null
    this.heap[0] = this.heap.pop()
   
    let i=0
    let leftChild = this.lChild(i)
    let rightChild = this.rChild(i)
    let childIndex = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild
    while(this.heap[childIndex] && this.heap[i] < this.heap[childIndex]){
        [this.heap[i], this.heap[childIndex]] = [this.heap[childIndex], this.heap[i]]
        i = childIndex
        leftChild = this.lChild(i)
        rightChild = this.rChild(i)
        childIndex = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild
    }

   }

   getMax(){
    return this.heap[0]
   }

   isEmpty(){
    return this.heap.length === 0
   }


    buildHeap(arr){
        this.heap = arr
        for(let i = Math.floor((arr.length - 1) / 2); i>=0; i--){
            this.heapify(arr,i,arr.length)
        } 
        // for(let i=arr.length-1; i>0; i--){
        //     [arr[0],arr[i]] = [arr[i],arr[0]]
        //     this.heapify(arr,0,i)
        // }
        return arr
    }



    heapify(arr,i,n){
        
        let largest = i
        let leftChildIndex = this.lChild(i)
        let rightChildIndex = this.rChild(i)

        if(leftChildIndex < n && arr[leftChildIndex] > arr[largest]){
            largest = leftChildIndex
        }

        if(rightChildIndex < n && arr[rightChildIndex] > arr[largest]){
            largest = rightChildIndex
        }
        if(largest != i){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            this.heapify(arr,largest,n)
        }
    }


}

const h = new MaxHeap()

//Max Heap Insertion

    h.insert(17)
    h.insert(14)
    h.insert(5)
    h.insert(15)
    h.insert(5)
    h.insert(3)

// Max Heap Deletion

    h.deleteMax()
    h.deleteMax()
    h.deleteMax()
    h.deleteMax()
    h.deleteMax()

// Build Max Heap And Sort

    h.buildHeap([10,11,20,40,1,5])


// Print heap
    console.log(h.heap);

// Get Max Value 
    console.log(h.getMax());

