/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const newNums = nums.map((_num,i)=>nums[nums[i]])
    return newNums
};