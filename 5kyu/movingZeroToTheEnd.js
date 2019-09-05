// Write an algorithm that takes an array and moves all of the 
// zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    var hasil = []
    var kumpul = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            hasil.push(arr[i])
        } else {
            kumpul.push(arr[i])
        }
    }
    for (var j = 0; j < kumpul.length; j++) {
        hasil.push(kumpul[j])
    }
    return hasil
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]