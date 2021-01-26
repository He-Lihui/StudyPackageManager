/*
 * @Author: your name
 * @Date: 2021-01-12 12:40:26
 * @LastEditTime: 2021-01-12 16:40:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\04_salary.js
 */
var maximumWealth = function(accounts) {
    var len1 = accounts.length
    var resArr = []
    var sum = 0
    for (var i = 0; i < len1; i++) {
        sum = accounts[i].reduce((x, y) => x + y)
        resArr.push(sum)
    }
    return Math.max(...resArr)
};
let accounts = [
    [1, 5],
    [7, 3],
    [3, 5]
]
console.log(maximumWealth(accounts))