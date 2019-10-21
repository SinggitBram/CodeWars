// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, 
// ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

function rot13(str) {
    let kamus1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let kamus2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    let hasil = str

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < kamus1.length; j++) {
            if (str[i] === kamus1[j]) {
                hasil[i] = kamus2[kamus1.indexOf(str[i])]
            }
        }
    }
    return hasil
}

console.log(rot13("EBG13 rknzcyr."))// == "ROT13 example.";
console.log(rot13("This is my first ROT13 excercise!"))// == "Guvf vf zl svefg EBG13 rkprepvfr!"

// hasil += kamus2[kamus1.indexOf(str[i])]