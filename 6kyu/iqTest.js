// Bob is preparing to pass IQ test. The most frequent task in this 
// test is to find out which one of the given numbers differs from the others. 
// Bob observed that one number usually differs from the others in evenness. 
// Help Bob — to check his answers, he needs a program that among the given 
// numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, 
// which means indexes of the elements start from 1 (not 0)
function iqTest(numbers) {
    let pisah = numbers.split(' ')
    let genap = []
    let ganjil = []
    for (let i = 0; i < pisah.length; i++) {
        if (pisah[i] % 2 === 0) {
            genap.push(i)
        } else {
            ganjil.push(i)
        }
    }
    console.log(genap)
    console.log(ganjil)
    if (genap.length === 1) {
        return genap[0] + 1
    } else if (ganjil.length === 1) {
        return ganjil[0] + 1
    }
}

console.log(iqTest("2 4 7 8 10"))//,3);
console.log(iqTest("1 2 2"))//, 1);