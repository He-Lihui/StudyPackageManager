/*
 * @Author: your name
 * @Date: 2021-01-13 10:32:42
 * @LastEditTime: 2021-01-14 09:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\10_js.js
 */

var shuffle = function(nums, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(nums[i])
        res.push(nums[i + n])
    }
    return res
};
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));