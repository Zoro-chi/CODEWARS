// KATA FOR THURSDAY, 31/3/22.

// Kata 1
// Description :

// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)

// Output:
// Number of files that can be fully saved in the HD.

// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12

// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11

// My Solution :

function save(sizes, hd) {
  let sum = 0;
  let rep = [];
  for (let i = 0; i < sizes.length; i++) {
    sum += sizes[i];
    if (sum <= hd) {
      rep.push(sizes[i]);
    }
  }
  return rep.length;
}

// My notes on Kata:

// 1) Took me longer than it should, trying to use the reduce method but it wasnt working.

// 2) After viewing answers, this was what i was trying to implement :
function save(sizes, hd) {
  let result = 0;
  sizes.reduce((acc, curr) => {
    if ((acc += curr) <= hd) result += 1;
    return acc;
  }, 0);
  return result;
}


// Kata 2:
// Description:

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// My Solution:

function countDevelopers(list) {
  let eu = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent == "Europe" && list[i].language == "JavaScript") {
      eu += 1;
    }
  }
  return eu;
}

// My notes on Kata:

// 1) First problem i've encountered with a objects inside an array, in codewars. Was a little bit harder than others.

