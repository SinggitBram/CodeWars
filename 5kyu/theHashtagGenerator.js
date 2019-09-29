function generateHashtag(str) {

    if (str === '' || str === ' ') {
        return false
    }
    str = str[0].toUpperCase() + str.slice(1)
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
        }
    }
    let pisah = str.replace(/\s/g, '')
    if (pisah.length > 139 || pisah === '') {
        return false
    } else {
        return `#${pisah}`
    }
}

console.log(generateHashtag(""))//, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)))//, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"))//, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"))//, "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"))//, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"))//, "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))//, "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))//, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)))//, "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)))//, false, "Too long")

// function generateHashtag (str) {
//     // If the input or the result is an empty string it must return false.
//     if (str === '') return false
//     // Create a variable to accomodate the result and a flag if it's a first letter
//     let result = '#'
//     let firstLetter = true
  
//     // Do looping to check each character
//     for (let i = 0; i < str.length; i++) {
//       // If there is a whitespace, set the flag to true
//       if (str[i] === ' ') {
//         firstLetter = true
//       }
//       // If it's a character, save it to the result
//       if (str[i] !== ' ' && firstLetter) {
//         result += str[i].toUpperCase()
//         firstLetter = false
//       } else if (str[i] !== ' ' && !firstLetter) {
//         result += str[i]
//         firstLetter = false
//       }
//     }
//     // If the length of the result string is more than 140 chars or empty string, return false
//     if (result.length > 140) return false
//     if (result === '#') return false
  
//     return result
//   }