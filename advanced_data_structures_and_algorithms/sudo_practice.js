
/*

[1] BINARY TREE 

    node creation
        left pointer
        value 
        right pointer
    
    Binary Tree Class
        root pointer

        methods
            insert
                > create a queue and shift element from the queue
                > check shifted element left child and right child empty then add node
                > else push the left and right node to queue
                > until the queue.length false

            search
                > traverse with same level order idea
                > check the target === curr.value return true
                > else false

        [x] delete -> pending

            pre-order
                > root
                > left
                > right
                
            in-order
                > left
                > root
                > right

            post-order
                > left
                > right
                > root

            level-order
                > print level by level



[2] BINARY SEARCH TREE

    node creation
        left pointer
        value 
        right pointer
    
    BST class
        root 

        methods

            insert
                > check root null then add node to root
                > else call the insertNode(this.root, node)

                >check the node value < root.value
                    > check the root.left null
                    > then add
                    > else
                    > recursion root.left
                > node value > root.value
                    > check the root.right null
                    > then add
                    > else recursion root.right

            search
                > check root null return null
                > check root value ==== target
                > else if target < root.value then recursion search(root.left,target)
                > else target > root.value then recursoin search(root.right, target)

            delete
                > check the root null return null
                > else call deleteNode(this.root, value)
                > value < root.value  deleteNode(root.left, value)
                > value > root.value  deleteNode(root.right, value)
                > else
                    > check the node has no left and right then return null
                    > check the node has no left node then return root.right
                    > check the node has no right node then return root.left
                    > else that is parent node so we can find the min node from right child and reaplce it
                    > after that delete that min node


            DFS -> same as above
            



[3] HEAP 
    [a] MAX HEAP

        node creation
            this.heap = []
        
        methods
            parent
                > Math,floor((i-1) / 2)
            left child
                > 2*i+1
            right child
                > 2*i+2

            insert
                > push the value to heap
                > take i initial heap length
                > while(i>0)
                    > find parent index using parent fnc

                    > check the heap[i] grater than  parentIndex value
                        > swap heap[i], heap[parentIndex]
                        > i = parentIndex
                    > else return
                    
            delete 
                > heap[0] = heap.pop()
                > i = 0
                > left child index
                > right child index
                > child index
                > while(childIndex && heap[i] < heap(childIndex))
                    swap(heap[i], heap[childIndex])
                    i = childIndex

                    left child index
                    right child index
                    child index

            build heap / heap sort
                > iterate loop from Math.floor((arr.length-1)/2) to i>=0
                > heapify(arr,i,arr.length)

                sort

                > iterate loop from arr.length-1 to i>0 i--
                    swap(arr[0],arr[i])
                    heapify(arr,0,i)

            heapify 
                > largest = i
                > left child index
                > right child index

                > check left < n && arr[left] > arr[largest]
                    largest = left
                > check right < n && arr[right] > arr[largest]
                    largest = right
                > check largest != i
                    swap(heap[i], heap[largest])
                    heapify(arr,largest,n)

         [a] MIN HEAP
            > this.heap = []

            > methods
                insert
                    > this.heap.push(value)
                    > initialize i as heap.length
                    > while(i>0)
                    > find parent Index
                    > check the heap[i] < heap[parentIndex]
                        > swap(heap[i], heap[parentIndex])
                        i = parentIndex

                delete

                    > this.heap[0] = this.heap.pop()
                    > let i = 0
                    > siftDown(i,heap.length)

                build heap . heap sort
                siftDown (i,n)
                    > smallest value is i
                    > left index
                    > right index
                    > check left < n && heap[left] < heap[smallest]
                        > smallest is left
                    > check right < n && heap[right] < heap[smallest]
                        > smallest is right
                    > smallest != i
                        > swap(heap[i], heap[smallest])
                        siftDown(smallest,n)


*/



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     left(i){
//         return 2*i+1
//     }

//     right(i){
//         return 2*i+2
//     }

//     insert(value){
//         this.heap.push(value)
//         let i=0;
//         while(i>0){
//             let parentIndex = this.parent(i)
//             if(this.heap[i] < this.heap[parentIndex]){
//                 [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
//                 i = parentIndex
//             }
//             else{
//                 return
//             }
//         }
//     }

//     delete(){
//         this.heap[0] = this.heap.pop()
//         let i=0;
//         this.siftDown(i,this.heap.length)
//     }

//     // heapSort(arr){
//     //     this.heap = arr
//     //     for(let i=arr.length-1; i>0; i--){
//     //         [arr[0],arr[i]] = [arr[i],arr[0]]
//     //         this.siftDown(0,i)
//     //     }
//     // }

//     siftDown(i,n){
//         let smallest = i
//         let leftIndex = this.left(i)
//         let rightIndex = this.right(i)
        
//         if(leftIndex < n && this.heap[leftIndex] < this.heap[smallest]){
//             smallest = leftIndex
//         }
        
//         if(rightIndex < n && this.heap[rightIndex] < this.heap[smallest]){
//             smallest = rightIndex
//         }

//         if(smallest != i){
//             [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
//             this.siftDown(smallest,n)
//         }
//     }


// }


// const h = new MinHeap()
// h.insert(5)
// h.insert(10)
// h.insert(20)
// h.insert(11)
// h.insert(12)
// h.insert(13)
// console.log(h.heap)
// h.delete()
// console.log(h.heap)
// h.delete()

// // h.heapSort(h.heap)

// console.log(h.heap)


/*

[4] Tries

    Node
        > create a hash map for Trie
        > also declare word end reference

    Trie Class
        > create a blank root node
        
        methods
        > insert
            > take the string as parameter
            > take curr as root
            > iterate when reach the string length
                > take each character and check the ! char inside the hash map
                >  then add node as the character to hash map
              >change curr to  inserted character
            > after the iteration set the word end to true

        > search
            > take root as current
            > iterate the loop until the string length end
                > take each character and check the !char inside the hash map
                    > return false
                > change curr to  inserted character 
            > return isWordEnd 
                   

        > starts With Prefix
            > take  root as current
            > iterate the loop until the string lenfth end
                > take each character and check the !char inside the hash map
                    > return false
                > change curr to  inserted character 
            > return true




*/



// class Node{
//     constructor(){
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let curr = this.root
//         for(let i=0; i<word.length; i++){
//             let charToInsert = word[i]
//             if(!(charToInsert in curr.children)){
//                 curr.children[charToInsert] = new Node()
//             }
//             curr = curr.children[charToInsert]
//         }
//         curr.isWordEnd = true
//     }


//     search(word){
//         let curr = this.root
//         for(let i=0; i<word.length; i++){
//             let charToFind = word[i]
//             if(!(charToFind in curr.children)){
//                 return false
//             }
//             curr = curr.children[charToFind]
//         }
//         return curr.isWordEnd
//     }

//     startsWithPrefix(prefix){
//         let curr = this.root
//         for(let i=0; i<prefix.length; i++){
//             let charToFind = prefix[i]
//             if(!(charToFind in curr.children)){
//                 return false
//             }
//             curr = curr.children[charToFind]
//         }
//         return true
//     }
// }


// const t = new Trie()
// t.insert("hello")
// console.log(t.root);
// // console.log(t.search("hello"));
// console.log(t.startsWithPrefix("h"));



// class Graph{
//     constructor(){
//         this.adjacentList = {}
//     }

    /*

    add Vertex
        >  check the the vertices ! exist in adjacent List
            >  create a set (array) and add the vertices


    add edges(vertex1, vertex2)
        > check the !exist  adjacentList[vertex1]
            > call addVertes

        > check the !exist  adjacentList[vertex2]
            > call addVertes
        
        > adjacentList[vertex1].add(vertex2)
        > adjacentList[vertex2].add(vertex2)
        



    */

    // addVertex(vertex){
    //     if(!this.adjacentList[vertex]){
    //         this.adjacentList[vertex] = new Set()
    //     }
    // }


    // addEdges(vertex1, vertex2){
    //     if(!this.adjacentList[vertex1]){
    //         this.addVertex(vertex1)
    //     }

    //     if(!this.adjacentList[vertex2]){
    //         this.addVertex(vertex2)
    //     }

    //     this.adjacentList[vertex1].add(vertex2)
    //     this.adjacentList[vertex2].add(vertex1)

    // }

    // display(){
    //     for(let vertes in this.adjacentList){
    //         console.log(`${vertes} -> ${[...this.adjacentList[vertes]]}`)
    //     }
    // }


    /*
    Has Edge
        > check the two connection true 
        this.adjacentList[vertex1].has(vertex2) &&
        this.adjacentList[vertex2].has(vertex1) 

    
    */


    // hasEdge(vertex1,vertex2){
    //     return(
    //         this.adjacentList[vertex1].has(vertex2) &&
    //         this.adjacentList[vertex2].has(vertex1) 
    //     )
    // }

    /*
    
    removeEdges
        > receive vertex1 and vertex2
        > adjacent[vertex1].delete(vertex2)
        > adjacent[vertex2].delete(vertex1)
    
    */



    // removeEdges(vertex1, vertex2){
    //     this.adjacentList[vertex1].delete(vertex2)
    //     this.adjacentList[vertex2].delete(vertex1)
    // }


    /*

    remove Vertex
        > check vertex ! exist 
            > return
        > iterate i in this.add[vertex]
            > removeEdges(vertex,i)
        delete this.add[vertex] 

     


     */

//     removeVertex(vertex){
//         for(let i in this.adjacentList[vertex]){
//             this.removeEdges(vertex,i)
//         }
//         delete this.adjacentList[vertex]
//     }


// }


// const g = new Graph()
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")

// g.addEdges("A","B")
// g.addEdges("B","C")

// g.removeEdges("A","B")
// g.removeVertex("A")

// g.display()

// console.log(g.hasEdge("A","B"));







function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      maxHeapify(arr, 0, i);
    }
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
      maxHeapify(arr, i, n);
    }
  }
  
  function maxHeapify(arr, i, n) {
    let largest = i;
    const left = 2*i + 1;
    const right = 2*i + 2;
    
    if (left < n && arr[left] < arr[largest]) {
      largest = left;
    }
    
    if (right < n && arr[right] < arr[largest]) {
      largest = right;
    }
    
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      maxHeapify(arr, largest, n);
    }
  }

  const arr = ['a','b','c','d','e'];
heapSort(arr);
console.log(arr); // [ 'e', 'd', 'c', 'b', 'a' ]








