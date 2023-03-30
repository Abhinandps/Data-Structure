

class Node{
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}


class BT{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root = null
    }
    
    insert(root, value){
        const node = new Node(value)
        if(root === null){
            this.root = node
        }
        else{
            let queue = []
            queue.push(root)
            while(queue.length){
                let curr = queue.shift()

                if(curr.left === null){
                    curr.left = node
                    break;
                }
                else{
                    queue.push(curr.left)
                }

                if(curr.right === null){
                    curr.right = node
                    break;
                }
                else{
                    queue.push(curr.right)
                }

            }
        }
    }

}



const bt = new BT()
bt.insert(bt.root, 10)
bt.insert(bt.root, 20)
bt.insert(bt.root, 30)
bt.insert(bt.root, 40)
bt.insert(bt.root, 50)


