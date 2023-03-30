/* Binary Tree


insertion
search
remove -> pending
levelOrder

*/

/*
class Node{
	constructor(value){
		this.left = null
		this.value = value
		this.right = null
	}
}

class BinaryTree{
	constructor(){
		this.root = null
	}
	
	isEmpty(){
		return this.root === null
	}

	insert(value){
		const node = new Node(value)
		if(this.isEmpty()){
			this.root = node
		}
		else{
			let q=[]
			q.push(this.root)
			while(q.length){
				let curr = q.shift()
				if(curr.left === null){
					curr.left = node
					break;
				}
				else{
					q.push(curr.left)
				}

				if(curr.right === null){
					curr.right = node
					break;
				}
				else{
					q.push(curr.right)
				}
				
			}
			
		}
	}


	levelOrder(){
		let q=[]
		q.push(this.root)
		while(q.length){
			let curr = q.shift()
			console.log(curr.value)
			if(curr.left){
				q.push(curr.left)
			}

			if(curr.right){
				q.push(curr.right)
			}
		}
	}


	search(target){
		let q=[]
		q.push(this.root)
		while(q.length){
			let curr = q.shift()
			if(curr.value === target){
				return true
			}
			if(curr.left){
				q.push(curr.left)
			}

			if(curr.right){
				q.push(curr.right)
			}
		}
		return false
	}



}


const bt = new BinaryTree()

bt.insert(5)
bt.insert(10)
bt.insert(15)

bt.levelOrder()
console.log(bt.search(5))

//console.log(bt.root)
*/



/*

Binary Search Tree

operations
	insertion
	search
	remove
	findClosestValue [x]
	isValidBST [x]




class Node{
	constructor(value){
		this.left = null
		this.value = value
		this.right = null
	}
}

class BST{
	constructor(){
		this.root = null
	}

	isEmpty(){
		return this.root === null
	}

	insert(value){
		const node = new Node(value)
		if(this.isEmpty()){
			this.root = node
		}
		else{
			this.insertNode(this.root, node)
		}
	}

	insertNode(root, node){
		if(node.value < root.value){
			if(root.left === null){
				root.left = node
			}
			else{
				this.insertNode(root.left,node)
			}
		}
		else{
			if(root.right === null){
				root.right = node
			}
			else{
				this.insertNode(root.right, node)
			}
		}
	}

	preOrder(root){
		if(root){
			console.log(root.value)
			this.preOrder(root.left)
			this.preOrder(root.right)
		}
	}

	search(root,value){
		if(!root){
			return null
		}
		else{
			if(root.value === value){
				return true
			}
			else if(value < root.value){
				return this.search(root.left,value)
			}
			else{
				return this.search(root.right,value)
			}
		}
	}

	minNode(root){
		if(!root.left){
			return root.value
		}
		else{
			this.minNode(root.left)
		}
	}

	remove(value){
		this.root = this.deleteNode(this.root, value)
	}

	deleteNode(root, value){
		if(!root){
			return null
		}
		if(value < root.value){
			root.left = this.deleteNode(root.left, value)
		}
		else if(value > root.value){
			root.right = this.deleteNode(root.right, value)
		}
		else{
			if(!root.left && !root.right){
				return null
			}
			else if(!root.left){
				return root.right
			}
			else if(!root.right){
				return root.left
			}
			else{
				root.value = this.minNode(root.right)
				root.right = this.deleteNode(root.right, root.value)
			}
		}
		return root
	}
	

}


const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(3)

bst.remove(20)
bst.preOrder(bst.root)
//console.log(bst.root)


console.log(bst.search(bst.root,10))








Heap
	MIN HEAP
	  operations
		insert
		delete
		heapSort
		buildHeap
	
	MAX HEAP
		insert
		delete
		heapSort
		buildHeap


*/

class MaxHeap{
	constructor(){
		this.heap = []
	}

	parent(i){
		return Math.floor((i-1)/2)
	}

	leftChild(i){
		return 2*i+1
	}

	rightChild(i){
		return 2*i+2
	}

	insert(heap,value){
		this.heap.push(value)
		let i = this.heap.length-1
		this.heapify(i,this.heap.length)

		/* while(i>0){
			let parentIndex = this.parent(i)
			if(this.heap[i] > this.heap[parentIndex]){
				[this.heap[i], this.heap[parentIndex]] = 								[this.heap[parentIndex],this.heap[i]]
				i= parentIndex 
			}
			else{
				return 
			}
		} */
	}

	deleteMax(){
		this.heap[0] = this.heap.pop()
		let i=0
		this.heapify(i,this.heap.length)	
	}

	buildHeap(arr){
		this.heap = arr
		for(let i=Math.floor(arr.length-1 / 2); i>=0; i--){
			this.heapify(i,arr.length)
		 }
			
		}


	heapify(i,n){
		let largest = i
		let left = this.leftChild(i)
		let right = this.rightChild(i)
		
		if(left < n && this.heap[left] > this.heap[largest]){
			largest = left
		}

		if(right < n && this.heap[right] > this.heap[largest]){
			largest = right
		}

		if(largest != i){
			[this.heap[i], this.heap[largest]] = 
			[this.heap[largest], this.heap[i]]
			this.heapify(largest,n)
		}
	}


	traverseHeap(heap, index=0){
		if(index >= heap.length) return
		let node = heap[index]
		console.log(node)
		this.traverseHeap(heap, this.leftChild(index))
		this.traverseHeap(heap, this.rightChild(index))
	}

	getMax(){
		return this.heap[0]
	}


}


const heap = new MaxHeap()

heap.insert(100)
/*
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(25)

heap.deleteMax()

heap.deleteMax()


heap.deleteMax()
*/

heap.buildHeap([10,30,14,20])
heap.deleteMax()

heap.insert(heap.heap,100)


heap.traverseHeap(heap.heap)

console.log("Maximum "+heap.getMax())
















