const msg = '123 world'
const add = function (a) {
    return function(b){
        return a + b
    }
}
// export {
//      msg,
//     add
//     }
export default {
    add,
    msg
}