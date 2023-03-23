
// Bubble Sort

function bubbleSort(arr){
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr.length-1-i; j++){
			if(arr[j]>arr[j+1]){
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}

return arr
}

//let arr = [4,1,2,3,5]

//console.log(bubbleSort(arr))






// Insertion Sort

function insertionSort(arr){
	for(let i=1; i<arr.length; i++){
		let numberToInsert = arr[i]
		let j = i-1 // to select sorted element
		
		while(j>=0 && arr[j]>numberToInsert){
			arr[j+1] = arr[j]
			j = j - 1
		}
		arr[j+1] = numberToInsert
	}
return arr
}

// let arr = [4,1,2,3,5]

//console.log( insertionSort(arr) )





// Quick Sort

function quickSort(arr){
	if(arr.length < 2) return arr

	let pivot = arr[arr.length-1]
	let left = []
	let right = []
	
	for(let i=0; i<arr.length-1; i++){
		if(arr[i] < pivot){
			left.push(arr[i])
		}
		else{
			right.push(arr[i])
		}
	}
return quickSort(left).concat(pivot,quickSort(right))

}


// let arr = [4,1,2,3,5]

// console.log(quickSort(arr))


// Merge Sort


function mergeSort(arr){

	if(arr.length < 2) return arr

	let mid = Math.floor( arr.length / 2 )
	let leftArr = arr.slice(0,mid)
	let rightArr = arr.slice(mid)

	return merge( mergeSort(leftArr),mergeSort(rightArr) )
}


function merge(leftArr, rightArr){
	let sortedArr = []
	while(leftArr.length && rightArr.length){
		if(leftArr[0] < rightArr[0]){
			sortedArr.push( leftArr.shift() )
		}else{
			sortedArr.push( rightArr.shift() )
		}
	}
	return [...sortedArr,...leftArr,...rightArr]
}



// let arr = [4,1,2,3,5]

// console.log( mergeSort(arr) )




// Selection Sort

function slectionSort(arr){
	for(let i=0; i<arr.length; i++){
		min = i
		for(let j=i+1; j<arr.length; j++){
			if(arr[j] < arr[min]){
				min = j
			}
		}

		if(min != i){
			let temp = arr[i]
			arr[i] = arr[min]
			arr[min] = temp
		}
	}
return arr
}

// let arr = [4,1,2,3,5]

// console.log(slectionSort(arr))






// Stack

/*
class Node{
	constructor(value){
		this.value = value
		this.next = null
	}
}
*/

class LinkedStack{
	constructor(){
		this.top = null
		this.size = 0
	}

	isEmpty(){
		return this.size === 0
	}

	getSize(){
		return this.size
	}

	push(value){
		const node = new Node(value)
		if(this.isEmpty()){
			this.top = node
		}
		else{
			node.next = this.top
			this.top = node
		}
	this.size++
	}

	pop(){
		if(this.isEmpty()) return console.log("Stack Empty")
		
		let item = this.top.value
		this.top = this.top.next
		this.size--
		return console.log(`${item} deleted`)
	}

	peek(){
		return console.log(`${this.top.value} is top value`)
	}

	display(){
		
		if(this.isEmpty()) return console.log("Stack Empty")
		let stackView = ''
		let curr = this.top
		while(curr){
			stackView += `${curr.value} `
			curr = curr.next
		}
		console.log(stackView)
	}


	isPrime(value){
		if(value<2) return false
		for(let i=2; i<value; i++){
			if(value % i === 0) return false
		}
		return value
	}

	checkPrimality(){
		let temp = this.top
		while(temp){
			let value = temp.value
			temp = temp.next
			if(this.isPrime(value)) return this.isPrime(value)
		}
	}

}



let stack = new LinkedStack()


//stack.push(3)
//stack.push(10)
//stack.push(15)
//stack.display()
// console.log(stack.getSize())
// stack.pop()
// stack.peek()
// console.log(stack.getSize())
//console.log(stack.checkPrimality())















// Queue



class Node{
	constructor(value){
		this.value = value
		this.next = null
	}
}

class LinkedQueue{
	constructor(){
		this.front = null
		this.rear = null
		this.size = 0
	}

	isEmpty(){
		return this.size === 0
	}
	
	getSize(){
		return this.size
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
		if(this.isEmpty()) return console.log("empty queue")
		
		let item = this.front.value
		this.front = this.front.next
		this.size--
		return item
	}

	peek(){
		return console.log(`${this.front.value} is front value`)
	}

	display(){
		if(this.isEmpty()) return console.log("empty queue")
		let queueList = ''
		let curr = this.front
		while(curr){
			queueList+= `${curr.value} `
			curr = curr.next
		}
		console.log(queueList)
	}

}


// Stack Implement Using Queue

class Stack{
	constructor(){
		this.queue = new LinkedQueue()
	}

	isEmpty(){
		return this.queue.isEmpty()
	}

	getSize(){
		return this.queue.getSize()
	}

	push(value){
		let rotate = this.getSize()
		this.queue.enqueue(value)
		while(rotate){
			this.queue.enqueue(this.queue.dequeue())
			rotate--
		}
	}

	pop(){
		return this.queue.dequeue()
	}

	peek(){
		return this.queue.peek()
	}

	display(){
		return this.queue.display()
	}
}



const stk = new Stack()


// stk.push(10)
// stk.push(20)
// stk.display()
// console.log(stk.pop())
// stk.peek()




// Hash Table

class HashTable{
	constructor(size){
		this.table = new Array(size)
		this.size = size
	}

	hash(key){
		let total = 0
		for(let i=0; i<key.length; i++){
			total+= key.charCodeAt(i)
		}
	return total % this.size
	}

	

	set(key,value){
		let index = this.hash(key)
		let bucket = this.table[index]
		if(!bucket){
			this.table[index] = [ [key,value] ]
		}
		else{
			let sameKeyItem = bucket.find(items => items[0] === key)
			if(sameKeyItem){
				sameKeyItem[1] = value
			}
			else{
				bucket.push([key,value])
			}
		}
	}

	get(key){
		let index = this.hash(key)
		let bucket = this.table[index]
		
		if(bucket){
			let sameKeyItem = bucket.find(items => items[0] === key)
			if(sameKeyItem){
				return sameKeyItem[1]
			}
		}
		return null
	}

	remove(key){
		let index = this.hash(key)
		let bucket = this.table[index]
		
		if(bucket){
			let sameKeyItem = bucket.find(items => items[0] === key)
			if(sameKeyItem){
				bucket.splice(bucket.indexOf(sameKeyItem), 1)
			}
		}
	}

	display(){
			 console.table(this.table)
			//this.table.forEach((_v,i)=> this.table[i] && console.log(this.table[i]) )	
		}

}



const table = new HashTable(50)

// console.log(table.hash("name"))

table.set("name","Arun")
// table.set("place","Canada")
table.display()
// console.log(table.get("name"))
// table.remove("place")
// table.remove("name")
// table.set("name","Amal")
// table.display()










