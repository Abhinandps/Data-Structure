class MyString{
    constructor(str){
        this.data = str;
    }

    // Read char
    charAt(index){
        if(index < 0 || index>=this.data.length){
            return undefined
        }
        return this.data[index]
    }

    update(index, char){
        if(index < 0 || index>=this.data.length){
            return undefined
        }

        let result ="";

        for(let i=0; i<this.data.length; i++){
            if(i === index){
                result+=char
            }else{
                result+= this.data[i];
            }
        }
        this.data = result;
    }

    search(char){
        for(let i=0; i<this.data.length; i++){
            if(this.data[i] === char){
                return i;
            }
        }
        return -1;
    }

    reverse(){
        let result ="";

        for(let i= this.data.length - 1; i>= 0; i--){
            result+= this.data[i];
        }
        return result;
    }

    // count occurences
    count(char){
        let count = 0;

        for(let i=0; i<this.data.length; i++){
            if(this.data[i]=== char){
                count++
            }
        }
        return {char, count}
    }

    print(){
        console.log(this.data)
    }
}

// Example Usage
const str = new MyString("banana");

console.log(str.charAt(2));   // n
console.log(str.search('n')); // 2
console.log(str.count('a'));  // { char: 'a', count: 3 }

str.update(0, 'B');

str.print();                  // Banana

console.log(str.reverse());   // ananaB
