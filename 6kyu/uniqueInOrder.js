function uniqueInOrder(soal) {

    let hasil = []
    for (let i = 0; i < soal.length; i++) {
        if (soal[i] !== hasil[hasil.length - 1]) {
            hasil.push(soal[i])
        }
    }
    return hasil
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))// == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))//         == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))//       == [1,2,3]
console.log(uniqueInOrder([]))