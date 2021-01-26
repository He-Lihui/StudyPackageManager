/*
 * @Author: your name
 * @Date: 2021-01-13 10:48:41
 * @LastEditTime: 2021-01-13 11:06:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\11_js.js
 */
var xorOperation = function(n, start) {
    let nums = []
    let sum = 0
    for (let i = 0; i < n; i++) {
        nums.push(start + 2 * i)
        sum ^= nums[i] ^ nums[i + 1]
    }
    return sum
};
console.log(xorOperation(10, 5));