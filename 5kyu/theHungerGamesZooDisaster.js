// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass

function whoEatsWho(zoo) {
    let obj = {
        'antelope': 'grass',
        'big-fish': 'little-fish',
        'bug': 'leaves',
        'bear': [
            'big-fish',
            'bug',
            'chicken',
            'cow',
            'leaves',
            'sheep'
        ],
        'chicken': 'bug',
        'cow': 'grass',
        'fox': [
            'chicken', 'sheep'
        ],
        'giraffe': 'leaves',
        'lion': [
            'antelope', 'cow'
        ],
        'panda': 'leaves',
        'sheep': 'grass'
    }
    let pisah = zoo.split(',')

    let hasil = [zoo]
    console.log(hasil)
    for (let i = 0; i < pisah.length; i++) {
        for (let key in obj) {
            if (key === pisah[i]) {
                for (let j = 0; j < obj[key].length; j++) {
                    if (pisah[i - 1] === obj[key][j]) {
                        hasil.push([pisah[i] + 'eats' + pisah[i - 1]])
                        pisah.slice(hasil.indexOf(pisah[i - 1]), 1)
                    } 
                    else if (pisah[i + 1] === obj[key][j]) {
                        hasil.push([pisah[i] + 'eats' + pisah[i + 1]])
                        pisah.slice(hasil.indexOf(pisah[i + 1]), 1)
                    }
                }
            }

        }
    }
    return hasil
}

 console.log(whoEatsWho("fox,bug,chicken,grass,sheep"))
// [
// "fox,bug,chicken,grass,sheep", 
// "chicken eats bug", 
// "fox eats chicken", 
// "sheep eats grass", 
// "fox eats sheep", 
// "fox"]
