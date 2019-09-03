// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.

function list(names) {
    var hasil = ''
    for (var i = 0; i < names.length; i++) {
        if (i === 0) {
            hasil += names[i].name
        } else if (i === names.length - 1) {
            hasil += ' & ' + names[i].name
        } else {
            hasil += ', ' + names[i].name
        }
    }
    return hasil
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''