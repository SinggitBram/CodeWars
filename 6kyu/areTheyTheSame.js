function comp(array1, array2) {
    if (!array1 || !array2) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (Math.pow(array1[i], 2) === array2[j]) {
                array1.splice(i, 1)
                array2.splice(j, 1)
                i--
            }
        }
    }

    if (array1.length === 0 && array2.length === 0) {
        return true
    } else {
        return false
    }
}
console.log(comp([ 10000000, 100000000 ],[ 100000000000000, 10000000000000000 ]))

