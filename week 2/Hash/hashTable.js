



class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            let sameKeyItem = bucket.find(items => items[0] === key)

            if (sameKeyItem) {
                sameKeyItem[1] = value
            }
            else {
                bucket.push([key, value])
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
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
            else{
                return null
            }
        }
    }

    display() {
        this.table.forEach(items => console.log(items))
    }


}

const table = new HashTable(50)

table.display()
table.set("name","kiran")
table.set("age","12")
table.display()




