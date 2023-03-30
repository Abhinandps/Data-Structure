
class Node{
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}


class BinarySearchTree{
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

    search(root, value){
        if(!root){
            return null
        }
        
        if(root.value === value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left, value)
        }
        else{
            return this.search(root.right, value)
        }
    }

    preOrder(root){
        if(root){
            
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
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

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }
        else{
           return  this.max(root.right)
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
    
    findClosestValue(root, target){
        let closestValue = root.value
        let minDiff = Math.abs( root.value - target )

        function dfs(node){
            if(!node) return 
            const diff = Math.abs(node.value - target)
            if(diff < minDiff){
                closestValue = node.value
                minDiff = diff
            }
            if(target < node.value){
                dfs(node.left)
            }
            else if(target > node.value){
                dfs(node.right)
            }
        }
        dfs(root)
        return closestValue
    }

    isValidBST(root) {
        let prev = null;
        
       function inorder(node) {
          if (node === null) {
            return true;
          }
          
          if (!inorder(node.left)) {
            return false;
          }
          
          if (prev !== null && prev >= node.val) {
            return false;
          }
          
          prev = node.val;
          
          return inorder(node.right);
        }
        
        return inorder(root);
      }
      


}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)



// Depth-First Search ( DFS )

    // 1.Pre Order Traversal
    // bst.preOrder(bst.root)

    // 2.In Order Traversal
    // bst.inOrder(bst.root)

    // 3.Post order Traversal
    // bst.postOrder(bst.root)

// Breadth First Search ( BFS )
    // bst.levelOrder()

// Search Node From Tree 
    // console.log(bst.search(bst.root, 10))

// Min Node & Max Node From Tree
    // console.log(bst.min(bst.root));

// Delete A Node From Tree
    // bst.delete(10)
    // bst.levelOrder()


//Find the closest value to a given number in a Tree
    // console.log(bst.findClosestValue(bst.root,13));

    console.log(bst.isValidBST(bst.root));


    