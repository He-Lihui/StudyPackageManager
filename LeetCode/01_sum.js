/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0, max = nums.length; i < max; i++) {
        for (let j = i + 1; j <= max; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

let r = twoSum([3, 2, 4], 7)
console.log(r)