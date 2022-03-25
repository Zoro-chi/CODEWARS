// KATA FOR FRIDAY, 25/3/2022

// Kata 1:
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



// Kata 2:
// Description:

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


// My solution :

function openOrSenior(data){
  let array = []
   data.forEach(arr => {
    if (arr[0] >= 55 && arr[1] > 7){
      array.push("Senior")
    } else {
      array.push("Open")
    }
  })
  return array
}

// My notes on Kata:
// 1) Fairly straight forward challenge

// 2) I really didnt feel much completing this challenge but after looking at the answers, I feel my code can be refactored more to :

function openOrSenior(data){
  return data.map(function(d){
    return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
  });
}
