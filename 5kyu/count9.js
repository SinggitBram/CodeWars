// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

function number9(n) {
    let counter = 0

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < String(i).length; j++) {
            if(String(i)[j] === '9'){
                counter++
            }
        }
    }
    return counter
}

console.log(number9(8)) //should return 0
console.log(number9(9)) //should return 1
console.log(number9(10)) //should return 1
console.log(number9(98)) //should return 18
console.log(number9(100)) //should return 20