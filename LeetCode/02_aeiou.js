/*
 * @Author: your name
 * @Date: 2021-01-12 10:04:35
 * @LastEditTime: 2021-01-12 10:34:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\02_aeiou.js
 */
var removeVowels = function(s) {
    s = s.replace(/[a,e,i,o,u]/g, '')
    return s
};
const r = removeVowels('aqeqiqoquqqq')
console.log(r)