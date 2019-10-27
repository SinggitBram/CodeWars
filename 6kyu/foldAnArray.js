function foldArray(array, runs) {
    let temp = array
    let counter = 0
    while (counter < runs) {
        let hasil = []
        if (temp.length % 2 === 0) {
            for (let i = 0; i < temp.length / 2; i++) {
                hasil.push(temp[i] + temp[temp.length - 1 - i])
            }
        } else if (temp.length % 2 !== 0) {
            for (let i = 0; i < Math.floor(temp.length / 2); i++) {
                hasil.push(temp[i] + temp[temp.length - 1 - i])
            }
            hasil.push(temp[(temp.length / 2) - 0.5])
        }
        temp = hasil
        counter++
    }
    return temp
}    
    console.log(foldArray([ 1, 2, 3, 4, 5 ], 1))// [6, 6, 3]
    console.log(foldArray([ 1, 2, 3, 4, 5 ], 2))// [9, 6]
    console.log(foldArray([ 1, 2, 3, 4, 5 ], 3))// [15]
    console.log(foldArray([ -9, 9, -8, 8, 66, 23 ], 1))// [14, 75, 0]
    console.log(foldArray([ 1, 2, 3, 4, 5, 99, 88, 78, 74, 73 ], 5))// [427]
    console.log(foldArray([ -1, -2, -3, -4, -5, -99, -88, -78, -74, -73 ], 5))// [-427]
    console.log(foldArray([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 10))// [0]
    console.log(foldArray([ 2 ], 20))// [2]
