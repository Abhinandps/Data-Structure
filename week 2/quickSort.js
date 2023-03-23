
function quickSort(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    if(arr.length < 2) return arr

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }

    } 
    return quickSort(left).concat(pivot,quickSort(right))

}

const arr = ['d','c','a','b','e' ]

console.log(quickSort(arr));



// const arr = [-6,20,8,-2,4 ]