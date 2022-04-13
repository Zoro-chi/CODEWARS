// KATA FOR WEDNESDAY, 13/4/22.

// Kata 1
// Description :

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// My Solution :

function findOutlier(integers) {
  let even = [];
  let odd = [];
  let a;
  integers.forEach((x) => {
    if (x % 2 == 0) {
      even.push(x);
    } else {
      odd.push(x);
    }
  });

  if (even.length < odd.length) {
    a = even[0];
  }
  if (odd.length < even.length) {
    a = odd[0];
  }
  return a
  }


//   Kata 2:
// Description : 

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// My Solution :

function digital_root(x) {
 let a = x.toString().split("");
 let b = a.reduce((acc, curr) => +acc + +curr);
 let c;
  if (b >= 1 && b > 9) {
    c = b
         .toString()
         .split("")
         .reduce((acc, curr) => +acc + +curr);
  } else if (b == 0) {
    c = 0
  } else {
    c = b
  }
    return c
  }