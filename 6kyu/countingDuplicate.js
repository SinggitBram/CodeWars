// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. The input string can be 
// assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let hasil = []
    let ubah = text.toLowerCase()
    let pisah = ubah.split('')
    let urut = pisah.sort()

    for (let i = 0; i < urut.length; i++) {
        if (hasil.length === 0) {
            hasil.push([urut[0]])
        } else if (urut[i] === hasil[hasil.length - 1][0]) {
            hasil[hasil.length - 1].push(urut[i])
        } else if (urut[i] !== hasil[hasil.length - 1][0]) {
            hasil.push([])
            hasil[hasil.length - 1].push(urut[i])
        }
    }
    let counter = 0
    for (let j = 0; j < hasil.length; j++) {
        if (hasil[j].length > 1) {
            counter++
        }
    }
    return counter
}       
console.log(duplicateCount(""))//, 0);
console.log(duplicateCount("abcde"))//, 0);
console.log(duplicateCount("aabbcde"))//, 2);
console.log(duplicateCount("aabBcde"))//, 2,"should ignore case");
console.log(duplicateCount("Indivisibility"))//, 1)
console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent")

// function duplicateCount(text) {
//     // Create an object and a variable to accomodate the result
//     let result = {}
//     let count = 0
//     // Using for-loop to get the occurence of each character
//     for (let i = 0; i < text.length; i++) {
//         if (result[text[i].toLowerCase()] === undefined) {
//             result[text[i].toLowerCase()] = 1
//         } else {
//             result[text[i].toLowerCase()]++
//         }
//     }
//     console.log(result)
//     // Use for-in loop to count the characters that occurs more than one
//     for (let key in result) {
//         if (result[key] > 1) {
//             count++
//         }
//     }
//     return count
// }