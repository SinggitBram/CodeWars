// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n 
// whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, 
// each subarray having two elements, first the number whose squared divisors is 
// a square and then the sum of the squared divisors.

function listSquared(m, n) {
    var jumlah = 0
    var hasil = []
    for (var i = m; i <= n; i++) {

        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                jumlah = jumlah + (j * j)

            }
        }
        if (Math.sqrt(jumlah) * Math.sqrt(jumlah) === jumlah) {
            hasil.push([i, jumlah])
        }
    }
    return hasil
}

console.log(listSquared(1, 250))//, [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250))//, [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500))//, [[287, 84100]])
