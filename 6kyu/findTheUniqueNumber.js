function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]) {
            return arr[i + 1]
        } else if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
            return arr[i]
        }
    }
}

console.log(findUniq([ 0, 1, 0 ]))//, 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))//, 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]))//, 10);