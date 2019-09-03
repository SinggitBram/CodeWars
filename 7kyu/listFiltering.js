// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    var hasil = []
    for (var i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            hasil.push(l[i])
        }
    }
    return hasil
}

console.log(filter_list([1,2,'a','b'])) //== [1,2]
console.log(filter_list([1,'a','b',0,15])) //== [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) //== [1,2,123]