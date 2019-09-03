// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in.

function solution(number) {
    var hasil = []
    var jumlah = 0
    for (var i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            hasil.push(i)
        }
    }
    for (var j =0;j<hasil.length;j++){
        jumlah += hasil[j]
    }
    // console.log(hasil)
    // console.log(jumlah)
    return jumlah
}

console.log(solution(10))//23