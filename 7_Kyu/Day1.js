// KATA FOR WEDNESDAY, 23/3/2022


// Description:

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.



// My Solution:

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length);
};


// My Notes on kata :

// I remembered the array.sort((a, b) => a - b) part from doing previous challenge with sorting arrays.
// The a.lenght - b.length tripped me so i had to googleFu
// Took me an hour to complete this and I will be starting from 8Kyu fundamentals from next commit, to solidify the basics.

