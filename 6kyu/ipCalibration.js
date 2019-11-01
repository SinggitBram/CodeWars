function isValidIP(str) {
    let temp = ''
    let hasil = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            hasil.push(temp);
            temp = ''
        } else {
            temp = temp + str[i]
        }
    }
    hasil.push(temp)
    if (hasil.length !== 4 || str.trim().length !== str.length || /[a-z]/i.test(str.toLowerCase()) === true) {
        return false
    }
    for (let j = 0; j < hasil.length; j++) {
        if (hasil[j] < 0 || hasil[j] > 255) {
            return false
        } else if (Number(hasil[j]).toString() !== hasil[j]) {
            return false
        }
    }
    return true
}

  console.log(isValidIP("0.0.0.0"))//, true);
  console.log(isValidIP("12.255.56.1"))//, true);
  console.log(isValidIP("137.255.156.100"))//, true);
  
  console.log(isValidIP(''))//, false);
  console.log(isValidIP('abc.def.ghi.jkl'))//, false);
  console.log(isValidIP('123.456.789.0'))//, false);
  console.log(isValidIP('12.34.56'))//, false);
  console.log(isValidIP('01.02.03.04'))//, false);
  console.log(isValidIP('256.1.2.3'))//, false);
  console.log(isValidIP('1.2.3.4.5'))//, false);
  console.log(isValidIP('123,45,67,89'))//, false);
  console.log(isValidIP('1e0.1e1.1e2.2e2'))//, false);
  console.log(isValidIP(' 1.2.3.4'))//, false);
  console.log(isValidIP('1.2.3.4 '))//, false);
  console.log(isValidIP('12.34.56.-7'))//, false);
  console.log(isValidIP('1.2.3.4\n'))//, false);
  console.log(isValidIP('\n1.2.3.4'))//, false);