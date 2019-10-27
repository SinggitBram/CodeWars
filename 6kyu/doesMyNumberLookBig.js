// A Narcissistic Number is a number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, 
// we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissistic(value) {
    let hasil = 0
    console.log(value.toString()[1])
    for (let i = 0; i < value.toString().length; i++) {
        hasil = hasil + (Math.pow(value.toString()[i], value.toString().length))
    }
    if (hasil === value) {
        return true
    }
    return false
}

  console.log(narcissistic(11940))//, false);
  console.log(narcissistic(48687))//, false);
  console.log(narcissistic(1634))//, true);
  console.log(narcissistic(371))//, true);
  console.log(narcissistic(10450081))//, false);