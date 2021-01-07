/*
 * @Descripttion: 
 * @version: 
 * @Author: helihui
 * @Date: 2021-01-07 17:43:33
 * @LastEditors: helihui
 * @LastEditTime: 2021-01-07 18:09:18
 */
class Student {
    fullName :string
    constructor(
        public firstName :string,
        public lastName :string,
        public  middleInitial :string
    ){
        this.fullName = `${firstName}·${middleInitial}·${lastName}`
    }
}
interface Person{
    firstName :string;
    lastName :string;
}
function greeter(person :Person){
    return `Hello ${person.firstName} ${person.lastName}`
}
let user = new Student('Jane' ,'M','User');
console.log(greeter(user))