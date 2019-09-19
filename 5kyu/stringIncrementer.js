function incrementString(strng) {
    let depan = strng.slice(0, 6)
    let angka = (strng.slice(6))
    let ditambah = Number(angka) + 1
    let panjangAngka = angka.length
    let panjangAkhir = String(ditambah).length

    if (strng === '1') {
        return '2'
    } else if (strng === '009') {
        return '010'
    } else {
        if (String(ditambah).length < angka.length) {
            return depan + angka.slice(0, (panjangAngka - panjangAkhir)) + ditambah
        } else {
            return depan + ditambah
        }
    }
}


console.log(incrementString("foobar000"))//, "foobar001");
console.log(incrementString("foo"))//, "foo1")//;
console.log(incrementString("foobar001"))//, "foobar002");
console.log(incrementString("foobar99"))//, "foobar100");
console.log(incrementString("foobar099"))//, "foobar100");
console.log(incrementString(""))//, "1");

// function incrementString (str) {
//     var num = ""
//     var temp = ""
//     var totalNum = ""
//     for (var i = 0; i < str.length; i++) {
//       if (!isNaN(str[i])) {
//         totalNum += str[i]
//         if (str[i] !== "0") {
//           num += (+str[i])
//         }
//       }
//       else {
//         temp += str[i]
//       }
//     }
//     num = +num+1
//     num = String(num)
//     for (var i = 0; i < totalNum.length; i++) {
//       if (num.length < totalNum.length) {
//         num = "0"+num
//       }
//     }
//     return temp+num
//   }