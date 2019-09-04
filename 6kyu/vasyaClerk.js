// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office 
// standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and 
// sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills 
// he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
    var dualima = 0
    var limapuluh = 0
    var seratus = 0

    for (var i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) {
            dualima++
        } else if (peopleInLine[i] === 50 && dualima > 0) {
            dualima--
            limapuluh++
        } else if (peopleInLine[i] === 100 && dualima > 0 && limapuluh > 0) {
            dualima--
            limapuluh--
            seratus++
        } else if (peopleInLine[i] === 100 && dualima > 2) {
            dualima -= 3
            seratus++
        }
    }
    if (25 * peopleInLine.length === (dualima * 25) + (limapuluh * 50) + (seratus * 100)) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(tickets([25, 25, 50])) // => YES 
console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)