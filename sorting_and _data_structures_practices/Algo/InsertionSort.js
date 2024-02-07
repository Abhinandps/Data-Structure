


function insertionSort(){
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j -1
        }
         arr[j+1] = numberToInsert
    }
}


const arr = [-6,20,8,-2,4]
insertionSort(arr)
console.log(arr);

