
function anagrams(word, words) {

console.log(word)
    let hasil = []
    for (let i = 0; i < words.length; i++) {
        if (gabung(words[i].split('').sort()) === gabung(word.split('').sort())) {
            hasil.push(words[i])
        }
    }
    return hasil
}
function gabung(huruf) {
    let gabungan = ''
    for (let i = 0; i < huruf.length; i++) {
        gabungan += huruf[i]
    }
    return gabungan
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))// => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))// => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))// => []