// Binary Search

var search = function(nums, target) {
    return BinarySearch(nums,target,0,nums.length-1)
};

function BinarySearch(nums,target,start,end){
    if(start > end){
        return -1
    }
    let middle = Math.floor((start+end) / 2);
    if(nums[middle] === target){
        return middle
    }else if(nums[middle] > target){
        return BinarySearch(nums,target,start,middle-1)
    }else{
        return BinarySearch(nums,target,middle+1,end)
    }
}

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



// Kadane's Algorithm
// ========================

// initialize kadane's algorithm function that takes array as an input 
// returns integer which is the maximum subarray sum.
const kadanesAlgorithm = (array) => {
    // keep track of current sum
    let maxSoFar = array[0];
    // keep track of maximum sum
    let maxSum = array[0];
    // go through all numbers in the array starting at index 1 (second element)
    for (let i = 1; i < array.length; i++) {
        // calculate the current sum by adding the current element to the previous current sum 
        // if the current number (arr[i]) is greater then current sum, set the current sum to current number value
        maxSoFar = Math.max(array[i], maxSoFar + array[i]);
        // compare the current sum and the maximum sum
        // if the current sum is greater, update the maximum sum
        maxSum = Math.max(maxSum, maxSoFar);
    }
    // return the maximum sum at the end
    return maxSum;
}


// initialize new array
const newArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// run Kadane's algorithm on new array
const maximumSum = kadanesAlgorithm(newArray);

console.log(maximumSum); // the result is 6 






