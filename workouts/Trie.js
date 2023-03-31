
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

    contains(word){
        let curr = this.root
        for(let i=0; i<word.length; i++){
            let charToFind = word[i]
            if(!curr.children[charToFind]){
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
            if(!curr.children[charToFind]){
                return false
            }
            curr = curr.children[charToFind]
        }
        return true
    }

    delete(word){
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(curr,word,index){
    
        if(index === word.length){
            curr.isEndOfWord = false     
            return Object.keys(curr.children).length === 0
        }

        let char = word[index]
        if(!curr.children[char]){
            return false
        }

        let shouldDeleteCurrentNode = this.deleteHelper(curr.children[char],word,index+1)
        if(shouldDeleteCurrentNode){
            delete curr.children[char]
            return Object.keys(curr.children).length === 0
        }
        return false
    }
    

}


const t = new Trie()
t.insert("Malayalam")
t.insert("Manu s pilla")
t.insert("Manikkam")
t.insert("Kiran")
t.insert("Kala")

t.delete("Kala");

t.delete("Manikkam");

console.log(t.traverse());

console.log(t.contains("Manu s pilla"));


console.log(t.startsWithPrefix("Kala"));


