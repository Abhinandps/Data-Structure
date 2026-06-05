// Array


class MyArray{
    constructor(){
        this.data = [];
    }
    
    // insert at end O(1)
    insert(value){
        this.data[this.data.length] = value
    }
    // return value at index
    get(index){}
    // update value at index
    update(index, value){}
    //delete last O(1)
    delete(){
        if(this.data.length === 0){
            return undefind
        }
        const lastItem = this.data[this.data.length-1];
        this. data.length--;
        return lastItem
    }
    // return index if found, otherwise 1 O(n)
    search(value){
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i] === value){
                return i
            }
        }
        return -1
    }
    // insert at position O(n)
    insertAt(index, value){
        if(index < 0 || index > this.data.length){
            return false
        }

        for(let i= this.data.length; i> index; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = value
    }
    // delete at position O(n)
    deleteAt(index){
        if(this.data.length < 0 || index > this.data.length ){
            return false
        }

        const deletedValue = this.data[index]
        for(let i = index; i < this.data.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        this. data.length--;
        return deletedValue
    }
    // traversal O(n)
    print(){
        console.log(this.data.join(" "));
    }
}


const arr = new MyArray();
arr.insert(10);
arr.insert(20)
arr.insert(30);

arr.insertAt(1,15)
console.log(arr.delete())
console.log(arr.deleteAt(1))
console.log(arr.search(20))

arr.print()



