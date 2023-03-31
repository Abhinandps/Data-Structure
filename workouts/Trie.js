
class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}


class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0; i<word.length; i++){
            let charToInsert = word[i]
            if(!curr.children[charToInsert]){
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true
    }

    traverse(){
        let words=[]
        function traverseHelper(node,word){

            if(node.isWordEnd){
                words.push(word)
            }

            for(let [char,childNode] of Object.entries(node.children)){
                traverseHelper(childNode,word + char)
            }

        }
        traverseHelper(this.root,'')
        return words
    }
}


const t = new Trie()
t.insert("Malayalam")
t.insert("Manu")
t.insert("Manikkam")
t.insert("Kiran")
t.insert("Kala")
console.log(t.traverse());