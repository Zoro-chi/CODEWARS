// KATA FOR TEUSDAY, 12/4/22.

// Description :

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// My Solution :

function solution(number){
  let res = []
  for (let i = 0; i < number; i++){
    if (i % 5 === 0 && i % 3 === 0){
      res.push(i)
    } else if (i % 5 === 0){
      res.push(i)
    } else if (i % 3 === 0){
      res.push(i)
    }
  }
  return res.reduce((prev, curr) => prev + curr, 0)
}

// My Notes on Kata:

// 1) I decided to start practising 6Kyu katas. 