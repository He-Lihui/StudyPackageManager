/*
 * @Author: your name
 * @Date: 2021-01-13 10:09:39
 * @LastEditTime: 2021-01-13 10:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\09_js.js
 */
var numJewelsInStones = function(jewels, stones) {
    let sum = 0
    if (jewels.length < 50 && jewels.length > 0 && stones.length < 50 && stones.length > 0) {
        for (let i = 0; i < stones.length; i++) {
            for (let j = 0; j < jewels.length; j++) {
                if (jewels[j] == jewels[j + 1]) {
                    throw new Error("jewels Error!")
                }
                if (stones[i] == jewels[j]) {
                    sum += 1
                }
            }
        }
    } else {
        throw new Error("length error!")
    }
    return sum
};
console.log(numJewelsInStones("aA", "aAAbbbb"))

"dec"
"daaccedebababecbbeacebbdadbceacbacdbbadeaeccbecbac"