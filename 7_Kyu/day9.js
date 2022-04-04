// KATA FOR MONDAY, 4/4/22.

// Kata 1
// Description :

// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2

// My Solution :

const nthChar = (words) => words.map((word, index)=>word[index]).join('')



// Kata 2:
// Description :

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7


// My solution:

function maxDiff(list) {
  
    let max = Math.max(...list);
    let min = Math.min(...list);
  
    if (list.length == 0) {
      return 0;
    } else {
      return max - min;
    }
  
  };

