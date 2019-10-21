function isPP(n) {
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < n; j++) {
            if (Math.pow(i, j) > n) {
                break
            } else if (Math.pow(i, j) === n) {
                return [i, j]
            }
        }
    }
    return null
}

console.log(isPP(4))//, [2,2], "4 = 2^2");
console.log(isPP(9))//, [3,2], "9 = 3^2");
console.log(isPP(5))//, null, "5 isn't a perfect number");
