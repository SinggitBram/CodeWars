// A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and 
// returns an array or a string (depending on the language) of the form:

function removeNb(n) {
    let akhir = []
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if ((faktorial(n) - j - k) === j * k) {
                akhir.push([j, k])
            }
        }
    }
    return akhir
}

function faktorial(m) {
    let hasil = 0
    for (let i = 1; i <= m; i++) {
        hasil += i
    }
    return hasil
}
console.log(removeNb(26))
console.log(removeNb(101))
console.log(removeNb(102))
console.log(removeNb(103))
console.log(removeNb(45))