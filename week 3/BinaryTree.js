

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

    
    levelOrder(){

        const queue = []
        queue.push(this.root)
        // console.log(queue);
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
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

    
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
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
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    mirror(root){
        if(root === null){
            return null
        }
        let left = this.mirror(root.left)
        let right =  this.mirror(root.right)

        root.left = right
        root.right = left
        return root
    }

}



const bt = new BT()
bt.insert(bt.root, 1)
bt.insert(bt.root, 2)
bt.insert(bt.root, 3)
bt.insert(bt.root, 4)
bt.insert(bt.root, 5)
bt.insert(bt.root, 6)
bt.insert(bt.root, 7)

// Delete Node From Binary Tree
    // bt.delete(10)
   bt.mirror(bt.root);

// BFS Traversal
    bt.levelOrder()


// bt.preOrder(bt.root)