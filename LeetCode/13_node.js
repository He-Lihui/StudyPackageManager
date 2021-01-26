
var calculateTime = function(keyboard, word) {
    let result = 0;
    let preIndex = 0
    for (let i = 0, max = word.length; i < max; i++) {
        let letter = word[i]
        var index = keyboard.indexOf(letter)
        result += Math.abs(index - preIndex)
        preIndex = index
    }
    return result
};
const keyboard = "pqrstuvwxyzabcdefghijklmno"
const word = "leetcode"
console.log(calculateTime(keyboard, word))