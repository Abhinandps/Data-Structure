

// Binary Search Missing Number

function missingNumber(arr){
    arr.sort((a,b)=>a-b)
    let leftIndex=0;
    let rightIndex = arr.length-1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(arr[middleIndex] > middleIndex){
            rightIndex = middleIndex - 1
        }
        else{
            leftIndex = middleIndex + 1
        }
    }
    return leftIndex
}

console.log(missingNumber([3,0,1]));


