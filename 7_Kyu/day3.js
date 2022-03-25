// KATA FOR FRIDAY, 25/3/2022


// Description:

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// My Solution:

function findShort(s){
  let arr = s.split(" ")
  let arrLens = arr.map(word => word.length)
  return Math.min(...arrLens)
}


// My Notes on kata :

// 1) Fairly straight forward to comprehend but i learnt that forEach() returns undefined and also using spreads       while passing arrays through the Math object.

// 2) This was another 7Kyu albeit on the fundamentals track, still fun to complete.

