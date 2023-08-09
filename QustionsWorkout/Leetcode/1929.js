/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function(nums) {
    const concatenatedArray=[]
    for(let i=0; i<nums.length; i++){
        concatenatedArray.push(nums[i])
    }
     for(let i=0; i<nums.length; i++){
        concatenatedArray.push(nums[i])
    }
    return concatenatedArray
};