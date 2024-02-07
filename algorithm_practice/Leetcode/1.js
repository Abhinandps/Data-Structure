let nums = [2, 7, 11, 15];
let target = 9;


function twoSum(nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; ++i) {
    if (!map[target - nums[i]]) {
      return [i + 1, map[nums[i]] + 1];
    } else {
      map[nums[i]] = i;
    }
  }
  return map;
}



// Method 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return map;
};

console.log(twoSum(nums, target));
