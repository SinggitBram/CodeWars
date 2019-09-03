// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    var kecil = word.toLowerCase()
    var hasil = ''

    for (var i = 0; i < kecil.length; i++) {
        var benar = 0
        for (var j = 0; j < kecil.length; j++) {
            if (kecil[i] === kecil[j]) {
                benar++
            }
        }
        if (benar > 1) {
            hasil += ')'
        } else{
            hasil += '('
        }
    }
    return hasil
}


console.log(duplicateEncode("din"))  // =>  "((("
console.log(duplicateEncode("recede"))  // =>  "()()()"
console.log(duplicateEncode("Success"))  //=>  ")())())"
console.log(duplicateEncode("(( @"))   //=>  "))((" 