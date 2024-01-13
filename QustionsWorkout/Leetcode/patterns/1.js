// Two pointer technique

//  1. Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

let arr = [4, 6, 10, 12, 18]
let target = 10

// before
let pair = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            pair.push([arr[i], arr[j]])
        }
    }
}

// console.log(pair)

// Time complexiy : O(N^2)

// =======================================

// after

function findPairs(arr, target) {
    let left = 0
    let right = arr.length - 1
    let pairs = []
    while (left < right) {
        const currentSum = arr[left] + arr[right]
        if (target === currentSum) {
            pairs.push([arr[left], arr[right]])
            left++;
            right--
        } else if (currentSum < target) {
            left++
        } else {
            right--
        }
    }
    return pairs
}

// console.log(findPairs(arr, target))


// 2.  Two Sum II - Input array is sorted

// Problem Statement:
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// Example:

let sortedArr = [2, 7, 11, 15];
let targetSum = 9;
// Expected Output: [1, 2]


function findTwo(arr, target) {
    let left = 0;
    let right = arr.length - 1
    let pairs = []

    while (left < right) {
        const sum = arr[left] + arr[right]
        if (target === sum) {
            pairs.push(left + 1, right + 1)
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return pairs
}

// console.log(findTwo(sortedArr, targetSum))


// 3. Container With Most Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example:

let elevationMap = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Expected Output: 49



// how to find it TODO:

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxWater = Math.max(maxWater, h * w);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}


// Problem Statement:
// Given an array nums of n integers, find all unique triplets in the array which gives the sum of zero

let nums = [-1, 0, 1, 2, -1, -4];
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]


function threeSum(nums) {
    nums.sort((a, b) => a - b)
    const result = []


}

console.log(threeSum(nums))

