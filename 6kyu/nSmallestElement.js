function firstNSmallest(array, n) {

    let baru = []
    for (let k = 0; k < array.length; k++) {
        baru.push(array[k])
    }
    let urut = baru.sort(function (a, b) {
        return a - b
    })
    let kecil = urut.slice(0, n)
    let hasil = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < kecil.length; j++) {
            if (array[i] === kecil[j]) {
                hasil.push(array[i])
                array.splice(i,1)
                kecil.splice(j,1)
                i--
            }
        }
    }
    return hasil.slice(0, n)
}

console.log(firstNSmallest([1,2,3,4,5],3))//, [1,2,3]);
console.log(firstNSmallest([5,4,3,2,1],3))//, [3,2,1]);
console.log(firstNSmallest([1,2,3,1,2],3))//, [1,2,1]);
console.log(firstNSmallest([1,2,3,-4,0],3))//, [1,-4,0]);
console.log(firstNSmallest([1,2,3,4,5],0))//, []);
console.log(firstNSmallest([1,2,3,4,5],5))//, [1,2,3,4,5]);
console.log(firstNSmallest([1,2,3,4,2],4))//, [1,2,3,2]);
console.log(firstNSmallest([2,1,2,3,4,2],2))//, [2,1]);
console.log(firstNSmallest([2,1,2,3,4,2],3))//, [2,1,2]);
console.log(firstNSmallest([2,1,2,3,4,2],4))//, [2,1,2,2]);