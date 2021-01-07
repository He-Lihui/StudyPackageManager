/*
 * @Descripttion: 
 * @version: 
 * @Author: helihui
 * @Date: 2021-01-07 17:18:39
 * @LastEditors: helihui
 * @LastEditTime: 2021-01-07 17:23:31
 */
interface Person {
    firstName : string;
    lastName : string
}

function greeter(person: Person){
    return `Hello,${person.firstName}  ${person.lastName}`
}
let user = {
    firstName :'Jane',
    lastName :'User'
}
console.log(greeter(user))