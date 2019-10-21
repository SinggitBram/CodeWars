// Here is the algorithm:

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

function validate(n) {
    n = String(n)
    let pisah = n.split('')
    let jumlah = 0
    console.log(pisah)
    if (pisah.length % 2 === 0) {
        for (let i = 0; i < pisah.length; i++) {
            if (i % 2 === 0) {
                pisah[i] = pisah[i] * 2
            }
        }
    } 
    
    else if (pisah.length % 2 !== 0) {
        for (let i = 0; i < pisah.length; i++) {
            if (i % 2 !== 0) {
                pisah[i] = pisah[i] * 2
            }
        }
    }

    console.log(pisah)

    for (let i = 0; i < pisah.length; i++) {
        if (String(pisah[i]).length > 1) {
            pisah[i] = pisah[i]-9
        }
    }
    
    console.log(pisah)
    for (let i = 0; i < pisah.length; i++) {
        jumlah += Number(pisah[i])
    }

    console.log(jumlah)

    if (jumlah % 10 === 0) {
        return true
    } else {
        return false
    }
}

console.log(validate(91))//, true);
console.log(validate(1))//, false);
console.log(validate(2121))//, true);
console.log(validate(1230))//, true);