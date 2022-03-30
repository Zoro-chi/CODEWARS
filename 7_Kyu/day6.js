// KATA FOR WEDNESDAY, 30/3/22.

// Kata 1
// Description :

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"


// My Solution :

function meeting(x){
  if (x.indexOf("O") == -1) {
    return "None available!";
  } else {
    return x.indexOf("O");
  }
}

// My Notes on kata :

// 1) My solution could be refactored more with the ternary operator.
function meeting(x){
  return x.indexOf("O") != -1 ? x.indexOf("O") : "None available!";
}



// Kata 2
// Description :

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


// My Solution :

function noOdds(values) {
  return values.filter((num) => num % 2 === 0);
}

// My Notes on Kata :

// 1) Fairly straight forward.