// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1)
                i--
            }
        }
    }
    return a
}


console.log(array_diff([], [4,5]))//, [], "a was [], b was [4,5]");
console.log(array_diff([3,4], [3]))//, [4], "a was [3,4], b was [3]");
console.log(array_diff([1,8,2], []))//, [1,8,2], "a was [1,8,2], b was []");