// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers
// (an element in arr1, and another element in arr2), their difference is as big as possible
// (absolute value); Again, you should to find a pair of numbers, 
// their difference is as small as possible. Return the maximum and minimum 
// difference values by an array: [ max difference, min difference ]

function maxAndMin(arr1, arr2) {
    let hasil = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            hasil.push(Math.abs(arr1[i] - arr2[j]))
        }
    }
    console.log(hasil)
    let urut = hasil.sort(function (a, b) {
        return a - b
    })
    console.log(urut)
    return [
        (urut[urut.length - 1]),
        urut[0]
    ]
}

console.log(maxAndMin([3,10,5],[20,7,15,8]))// , [17,2])
console.log(maxAndMin([3],[20]))// , [17,17])
console.log(maxAndMin([3,10,5],[3,10,5]))// , [7,0])
console.log(maxAndMin([1,2,3,4,5],[6,7,8,9,10]))// , [9,1])