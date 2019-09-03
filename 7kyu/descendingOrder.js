// Your task is to make a function that can take any non-negative integer as a argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
    var ubah = n.toString()
    var pisah = ubah.split('')
    for (var j = 0; j < pisah.length; j++) {
        for (var i = 0; i < pisah.length; i++) {
            if (pisah[i] < pisah[i + 1]) {
                var temp = pisah[i]
                pisah[i] = pisah[i + 1]
                pisah[i + 1] = temp
            }
        }
    }
    var hasil = Number(pisah.join(''))
    return hasil
}
console.log(descendingOrder(0)); //0
console.log(descendingOrder(1)); //1
console.log(descendingOrder(123456789)) //987654321