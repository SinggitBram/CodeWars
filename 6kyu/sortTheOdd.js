// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
    var ganjil = []
    var posisi = []
    var akhir = array
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            ganjil.push(array[i]);
            posisi.push(i)
        }
    }
    ganjil.sort(function (a, b) {
        return a - b
    })

    for (var j = 0; j < ganjil.length; j++) {
        akhir.splice(posisi[j], 1, ganjil[j])
    }
    return akhir
}

 console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
 console.log(sortArray([5, 3, 1, 8, 0])) //[1, 3, 5, 8, 0]
 console.log(sortArray([])) //[]