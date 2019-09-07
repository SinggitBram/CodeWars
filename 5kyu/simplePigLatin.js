// Move the first letter of each word to the end of it, then 
// add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    var pisah = str.split(' ')
    var arr = []
    for (var i = 0; i < pisah.length; i++) {
        if (pisah[i] !== '!' && pisah[i] !== '?') {
            arr.push(pisah[i].slice(1, pisah[i].lengh) + pisah[i][0] + 'ay')
        } else {
            arr.push(pisah[i])
        }
    }
    var hasil = arr.join(' ')
    // console.log(arr) console.log(pisah) console.log(hasil)
    return hasil
}





console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !