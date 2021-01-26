/*
 * @Author: your name
 * @Date: 2021-01-12 16:24:41
 * @LastEditTime: 2021-01-13 09:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\06_.js
 */
var decode = function(encoded, first) {
    let arr = [first],
        temp = first
    for (let i of encoded) {
        let curr = temp ^ i
        arr.push(curr)
        temp = curr
    }
    return arr
};
let r = decode([6, 2, 7, 3], 4)
console.log(r)

function change([a, b]) {
    a = a ^ b
    b = b ^ a
    a = a ^ b
    return [a, b]
}
console.log(change([2, 3]))