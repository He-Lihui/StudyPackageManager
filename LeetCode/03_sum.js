/*
 * @Author: your name
 * @Date: 2021-01-12 10:40:47
 * @LastEditTime: 2021-01-12 10:48:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\03_sum.js
 */
var runningSum = function(nums) {
    let sum = 0;
    let res = []
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        res.push(sum)
    }
    return res
};
let nums = [1, 2, 3, 4]
let r = runningSum(nums)
console.log(r)