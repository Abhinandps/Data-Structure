


// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class LinkedListStack{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(val){
//         let node = new Node(val)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()) return null
//         this.head = this.head.next
//         this.size--
//     }

//     print(){
//         let listView = ''
//         let temp = this.head
//         while(temp){
//             listView+= `${temp.value} `
//             temp = temp.next
//         }
//         console.log(listView)
//     }
// }


// let stack = new LinkedListStack()
// let arr = [10,20,30,40,50,60]

// for(let i in arr){
//     stack.push(arr[i])
// }

// stack.print()
// stack.pop()



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedListStack{
    constructor(){
        this.top = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    push(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.top = newNode
            this.size++
        }
        else{
            newNode.next = this.top
            this.top = newNode
            this.size++
        }
    }

    pop(){
        let item = this.top.value
        this.top = this.top.next
        this.size--
        return item
    }

    print(){
        let temp = this.top
        let list = ''
        while(temp){
            list+=`${temp.value}`
            temp = temp.next
        }
        console.log(list);
    }


}


let list = new LinkedListStack()

const arr = [4,7,6]
arr.forEach(v=>list.push(v))
list.print()
console.log(list.pop());
list.print()







