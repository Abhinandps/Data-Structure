

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


// Brute Force ( Echaustive Search Algorithm )
// ================

// initialzie brute force algorithm function
// it takes array as an input  
const bruteForce = (array) => {
    // we assume that the first value is the max value from the array
    let maxValue = array[0]
    // go through all elements in the array except first element
    for (let i = 1; i < array.length; i++) {
        // if the current value is greater than max value before
        if (array[i] > maxValue) {
            // update max value
            maxValue = array[i];
        }
    }
    // return max value
    return maxValue;
}


// initialize new array
const newArray = [20, 50, 2, 321, 8, 121, 256, 133, 32]
// run brute force algorithm
const maxValue = bruteForce(newArray);

console.log(`Max value of this array is: ${maxValue}`); // 321

