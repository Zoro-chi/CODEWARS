// KATA FOR SATURDAY, 2/4/22.

// Kata 1
// Description :

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// My Solution :

function gimme (triplet) {
    let mapped = triplet.map(x => x).sort((a, b) => a - b)[1]
    return triplet.indexOf(mapped)
}


// My Notes on Kata :

// 1) After viewing the answers, my solution can be refactored further into:
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}


// Kata 2:
// Description :

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"


// My Solution:

function spacify(str) {
    return str.split("").join(" ")
}

// My notes on kata :

// 1) Fairly straight forward.