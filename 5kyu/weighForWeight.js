// My friend John and I are members of the "Fat to Fit Club (FFC)". 
// John is worried because each month a list with the weights of members is published and 
// each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, 
// I will modify the order of the list". It was decided to attribute 
// a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 
// 100 will come before 99. Given a string with the weights of FFC members in 
// normal order can you give this string ordered by "weights" of these numbers?

function orderWeight(strng) {
    var pisah = strng.split(' ')
    var hasil = []
    var hasilobj = []
    for (var i = 0; i < pisah.length; i++) {
        var jumlah = 0
        for (var j = 0; j < pisah[i].length; j++) {
            jumlah+=Number(pisah[i][j])
        }
        hasil.push(jumlah)
    }
    for (var k = 0; k < hasil.length; k++) {
        var obj = {
            [pisah[k]] : hasil[k]
        }
        hasilobj.push(obj)
    }
    hasil.sort(function (a,b){return a-b})
    
    console.log(hasilobj)
    console.log(hasil)
    console.log(pisah)
}



console.log(orderWeight("103 123 4444 99 2000"))//, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))//, "11 11 2000 10003 22 123 1234000 44444444 9999")
