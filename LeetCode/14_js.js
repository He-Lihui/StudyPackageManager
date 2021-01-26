var arrayStringsAreEqual = function(word1, word2) {
    let str1 =''
    let str2=''
    let len1 = word1.length
    let len2 = word2.length
    for(let i=0;i<len1 ; i++){
        str1 += word1[i]
    }
    for(let j=0 ; j<len2 ; j++){
        str2 += word2[j]
    }
    if( str1 == str2 ) return true
    return false
};


const  word1  = ["abc", "d", "defg"]

const  word2 = ["abcddefg"]
console.log(word1.join(''))
console.log(word2.join(''))