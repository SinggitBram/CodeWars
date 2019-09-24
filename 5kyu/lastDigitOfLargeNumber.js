var lastDigit = function (str1, str2) {
    let duaDigit = str2[str2.length - 2] + str2[str2.length - 1]
    if (str2 === '0') {
        return 1
    }
    let hasil
    if (duaDigit % 4 === 0 && str2 > 9) {
        hasil = String(Math.pow(str1[str1.length - 1], 4))
        return Number(hasil[hasil.length - 1])
    } else if (str2 > 9) {
        hasil = String(Math.pow(str1[str1.length - 1], duaDigit % 4))
        return Number(hasil[hasil.length - 1])
    } else {
        hasil = String(Math.pow(str1[str1.length - 1], str2 % 4))
        return Number(hasil[hasil.length - 1])
    }
}

console.log(lastDigit("4", "1"))//, 4);
console.log(lastDigit("4", "2"))//, 6);
console.log(lastDigit("9", "7"))//, 9);
console.log(lastDigit("10","10000000000"))//, 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))//, 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))//, 7);