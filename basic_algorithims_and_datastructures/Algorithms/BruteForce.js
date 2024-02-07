
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

// -----------------------------------------------------------------------


// Find Minimum in Rotated Sorted Array II

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].



// Example 1:

// Input: nums = [1,3,5]
// Output: 1
// Example 2:

// Input: nums = [2,2,2,0,1]
// Output: 0
 


var findMin = function(nums) {
    return minValue(nums,0,nums.length-1)
};

function minValue(nums,start,end){
    if(start === end){
        return nums[start];
    }
    let mid = Math.floor((start + end) / 2);
    if(nums[mid] > nums[end]){
        return minValue(nums, mid+1,end)
    }else if(nums[mid] < nums[end]){
        return minValue(nums,start,mid)
    }
    else{
        return minValue(nums,start, end-1);
    }
}

// ----------------------------------------------------------

// Running Sum of 1d Array
// =========================


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

var runningSum = function(nums) {
    let currentSum = 0;
    for(let i=0; i<nums.length; i++){
        currentSum +=nums[i]
        nums[i]=currentSum;
    }
    return nums
};





// Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.


// Eample 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]




var countKDifference = function(nums, k) {
    let count = 0;
     for(let i=0; i<nums.length-1; i++){
         for(let j=i+1; j<nums.length;j++){
             if(Math.abs(nums[i] - nums[j]) === k ){
                 count++;
             }
         }
     }
     return count;
};