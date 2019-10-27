function count(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] === undefined) {
            obj[string[i]] = 1
        } else {
            obj[string[i]]++
        }
    }
    return obj
}

console.log(count("aba"))//, { a: 2, b: 1 }); 
console.log(count(""))//, {});