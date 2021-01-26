/*
 * @Author: your name
 * @Date: 2021-01-13 09:48:53
 * @LastEditTime: 2021-01-13 10:08:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\08_js.js
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = []
    for (let i = 0, max = candies.length; i < max; i++) {
        let need = Math.max(...candies) - candies[i]
            //每个人目前所持数量和最多的相比差几个
        if (need < extraCandies) {
            res.push(true)
        } else if (need > extraCandies) {
            res.push(false)
        } else {
            res.push(true)
        }
    }
    return res
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))