// Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return 
// an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let kecil = s.toLowerCase()
    let obj = {}
    let sekali = []
    let posisi = []

    for (let i = 0; i < kecil.length; i++) {
        if (!obj[kecil[i]]) {
            obj[kecil[i]] = 1
        } else {
            obj[kecil[i]]++
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            sekali.push(key)
        }

    }
    for (let j = 0; j < sekali.length; j++) {
        posisi.push(kecil.indexOf(sekali[j]))
    }
    posisiUrut = posisi.sort(function (a, b) {
        return a - b
    })

    if (!s) {
        return ''
    } else if ( (s.length / Object.keys(obj).length === obj[Object.keys(obj)[0]]) && s.length > 1) {
        return ''
    } else {
        return s[posisiUrut[0]]
    }
}

console.log(firstNonRepeatingLetter('a'))//, 'a');
console.log(firstNonRepeatingLetter('sTrEss'))//, 't');
console.log(firstNonRepeatingLetter('moonmen'))//, 'e');
console.log(firstNonRepeatingLetter('aabbaabb'))