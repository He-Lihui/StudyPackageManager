/*
 * @Author: your name
 * @Date: 2021-01-13 09:36:33
 * @LastEditTime: 2021-01-13 09:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\07_js.js
 */
var numIdenticalPairs = function(nums) {
    let sum = 0
    for (let i = 0, max = nums.length; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            if (nums[i] == nums[j]) {
                sum += 1
            }
        }
    }
    return sum
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))