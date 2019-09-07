// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. 
// The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, 
// "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. 
// Since this is the wild west, with dreadfull weather and not much water, 
// it's important to save yourself some energy, otherwise you might die of thirst!
// Task
// Write a function dirReduc which will take an array of strings and returns 
// an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
    var result = []
    for (let i = 0; i < arr.length; i++) {
        if ((result[result.length - 1] === "SOUTH" && arr[i] === "NORTH") || (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH") || (result[result.length - 1] === "WEST" && arr[i] === "EAST") || (result[result.length - 1] === "EAST" && arr[i] === "WEST")) {
            result.pop()
        } else 
            result.push(arr[i]);
        }
    return (result)
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))//, ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))//, ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))//, [])