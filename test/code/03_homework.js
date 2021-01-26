/*
 * @Author: your name
 * @Date: 2021-01-11 09:31:34
 * @LastEditTime: 2021-01-11 09:32:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\code\03_homework.js
 */

var a = 10;
var obj = {
  a: 20,
  fn() {
    setTimeout(() => {
      console.log(this)
    })
  }
}
obj.fn()