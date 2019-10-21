function wave(kata) {
    let hasil = []
    let temp = ''
    console.log(kata)
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] !== ' ') {
            temp = kata.substring(0, i) + kata[i].toUpperCase() + kata.substring(i + 1)
            hasil.push(temp)
        }
    }
    return hasil
}


console.log(wave("hello"))//["Hello", "hEllo", "heLlo", "helLo", "hellO"];

console.log(wave("codewars"))//["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];

console.log(wave(""))//[];

console.log(wave("two words"))//["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];

console.log(wave(" gap "))//[" Gap ", " gAp ", " gaP "];