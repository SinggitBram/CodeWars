function getLengthOfMissingArray(aoa) {

    let arr = []
    let hasil
    if (aoa === null) {
        return 0
    }
    for (let i = 0; i < aoa.length; i++) {
        if (aoa[i] === null) {
            return 0
        } else {
            arr.push(aoa[i].length)
        }
    }
    arr.sort(function (a, b) {
        return a - b
    })
    console.log(arr)
    if (arr[0] === 0) {
        return 0
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] + 1 !== arr[j + 1]) {
            return arr[j] + 1
        }
    }
    return 0
}
  console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ))//, 3);
  console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ))//, 2);
  console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ))//, 2);
  console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ))//, 5);
  console.log(getLengthOfMissingArray([ ]))//, 0);