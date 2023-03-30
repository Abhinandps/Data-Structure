

class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class TrieNode{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0; i<word.length; i++){
            let charToInsert = word[i]
            if(!(charToInsert in curr.children)){
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true
    }

    search(word){
        let curr = this.root 
        for(let i=0; i<word.length; i++){
            let charToFind = word[i]
            if(!(charToFind in curr.children)){
                return false
            }
            curr = curr.children[charToFind]
        }
        return curr.isWordEnd
    }
    
    startsWithPrefix(prefix){
        let curr = this.root
        for(let i=0; i<prefix.length; i++){
            let charToFind = prefix[i]
            if(!(charToFind in curr.children)){
                return false
            }
            curr = curr.children[charToFind]
        }
        return true
    }
}

const t = new TrieNode()
t.insert("Abhi")
t.insert("Abhinand")
t.insert("Anu")
t.insert("Amal")
console.log(t.search("Anu"))
console.log(t.startsWithPrefix("Abhi"))

console.log(t.root)
