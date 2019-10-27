function findSequences(n) {
    let hasil = []

    for (let i = 1; i < n; i++) {
        let temp = []
        for (let j = i; j < n; j++) {
            temp.push(j)
            if (jumlah(temp) === n) {
                hasil.push(temp)
                break
            }
        }
    }

    function jumlah(m) {
        let tambah = 0
        for (let j = 0; j < m.length; j++) {
            tambah = tambah + m[j]
        }
        return tambah
    }

    hasil.sort(function (a, b) {
        return a.length - b.length
    })
    
    return hasil
}

console.log(findSequences(3))// , [[1,2]])

console.log(findSequences(15))// , [[7,8],[4,5,6],[1,2,3,4,5]])

console.log(findSequences(20))// , [[2, 3, 4, 5, 6]])

console.log(findSequences(100))// , [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]])

console.log(findSequences(1))// , [])