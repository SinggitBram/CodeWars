// Usually when you buy something, you're asked whether your credit card number, phone number or 
// answer to your most secret question is still correct. However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
    hasil = ''
    if (cc.length > 4) {
        for (var j = 0; j < cc.length - 4; j++) {
            hasil += '#'
        }
        for (var i = cc.length - 4; i < cc.length; i++) {
            hasil += cc[i]
        }
    } else {
        for (var k = 0; k < cc.length; k++) {
            hasil += cc[k]
        }
    }
    return hasil
}
    

console.log(maskify("4556364607935616")) //== "############5616"
console.log(maskify(     "64607935616")) //==      "#######5616"
console.log(maskify(               "1")) //==                "1"
console.log(maskify(                "")) //==                 ""

// "What was the name of your first pet?"
console.log(maskify("Skippy"))                                   //== "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")) //== "####################################man!"