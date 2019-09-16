// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(words) {
    let pisah = words.split(' ')
    let hasil = []
    console.log(pisah)
    for (let j = 0; j < pisah.length; j++) {
        if (pisah[j].length > 4) {
            hasil.push(balik(pisah[j]))
        } else {
            hasil.push(pisah[j])
        }
    }
    let akhir = hasil.join(' ')
    console.log(hasil)
    return akhir
}

function balik(kata) {
    let dibalik = ''
    for (let i = kata.length - 1; i >= 0; i--) {
        dibalik += kata[i]
    }
    return dibalik
}

console.log(spinWords("Welcome"))//, "emocleW");
console.log(spinWords("Hey fellow warriors"))//, "Hey wollef sroirraw");
console.log(spinWords("This is a test"))//, "This is a test");
console.log(spinWords("This is another test"))//, "This is rehtona test");
console.log(spinWords("You are almost to the last test"))//, "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"))//, "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"))//, "ylsuoireS this is the last one");