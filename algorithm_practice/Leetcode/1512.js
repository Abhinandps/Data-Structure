// 1512. Number of Good Pairs

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


// solution 1 

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let i = 0;
    let j = i+1;
    let count = 0;
    nums.sort()
    while(i<j){
        if(nums[i] === nums[j]){
            count++;
            j++
        }else{
            i++;
            j = i+1;
            if(nums[j] === undefined){
                return count
            }
        }
    }
    return count
};


// solution 2 


/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function(nums) {
    const numsCounts={}
    let count = 0;

    for(const num of nums){
        if(numsCounts[num]){
            count+= numsCounts[num]
            numsCounts[num]++
        }else{
            numsCounts[num] = 1;
        }
    }
    return count
};


