// Write a method that takes an array of consecutive (increasing) letters as input and 
// that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kamusbesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hasil = ''
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < kamus.length; j++) {
            if (array[i] === kamus[j]) {
                if (array[i + 1] !== kamus[j + 1]) {
                    return kamus[j + 1]
                }
            } else if (array[i] === kamusbesar[j]) {
                if (array[i + 1] !== kamusbesar[j + 1]) {
                    return kamusbesar[j + 1]
                }
            }
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f'])) //-> 'e'
console.log(findMissingLetter(['O','Q','R','S'])) //-> 'P'