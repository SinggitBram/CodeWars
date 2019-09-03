// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

function XO(str) {
    var jumlahO = 0
    var jumlahX = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'o' || str[i] === 'O') {
            jumlahO++
        } else if (str[i] === 'x' || str[i] === 'X') {
            jumlahX++
        }
    }
    if (jumlahO === jumlahX) {
        return true
    } else {
        return false
    }
}

console.log(XO("ooxx"))// => true
console.log(XO("xooxx"))// => false
console.log(XO("ooxXm"))// => true
console.log(XO("zpzpzpp"))// => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"))// => false