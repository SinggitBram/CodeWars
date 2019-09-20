
function toCamelCase(str) {
    let hasil = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            hasil += (str[i+1]).toUpperCase()
            i++
        }
        else {
            hasil += str[i]
        }
    }
    return hasil
}



console.log(toCamelCase(''))//, '', 
console.log(toCamelCase("the_stealth_warrior"))//, "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior"))//, "TheStealthWarrior"
console.log(toCamelCase("A-B-C"))//, "ABC"
