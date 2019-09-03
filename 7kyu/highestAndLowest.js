// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

function highAndLow(numbers) {
    var pisah = numbers.split(' ')
    pisah.sort(function (a, b) {
        return b - a;
    })
    var hasil = pisah[0] + ' ' + pisah[pisah.length - 1]
    return hasil
}

  console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
  console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
  console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))