// Write a function called that takes a string of parentheses, and determines if the 
// order of the parentheses is valid. The function should return true if the string is 
// valid, and false if it's invalid.



function validParentheses(parens) {
    var kiri = 0
    var kanan = 0

    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            kiri++
        } else if (parens[i] === ')') {
            kanan++
        }
    }
    if (kiri === kanan && parens[0] === '(' && parens[parens.length - 1] === ')') {
        return true
    } else if (kiri === 0 && kanan === 0) {
        return true
    } else {
        return false
    }
}



console.log(validParentheses("()"))//              =>  true
console.log(validParentheses(")(()))"))  //        =>  false
console.log(validParentheses("(")) //              =>  false
console.log(validParentheses("(())((()())())")) // =>  true