function findOutlier(integers) {
    let genap = []
    let ganjil = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            genap.push(integers[i])
        } else 
            ganjil.push(integers[i])
    }
    console.log(genap)
    console.log(ganjil)
    if (ganjil.length === 1) {
        return ganjil[0]
    } else if (genap.length === 1) {
        return genap[0]
    }
}


console.log(findOutlier([0, 1, 2]))//, 1)
console.log(findOutlier([1, 2, 3]))//, 2)
console.log(findOutlier([2,6,8,10,3]))//, 3)
console.log(findOutlier([0,0,3,0,0]))//, 3)
console.log(findOutlier([1,1,0,1,1]))//, 0)