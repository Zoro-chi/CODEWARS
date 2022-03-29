// KATA FOR TEUSDAY, 29/3/22

// Kata 1
// Description:

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


// My Solution :

function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a, b) => a - b)
  return (sorted[0] + sorted[1])
}

// My Notes on kata :

// 1) Fairly straight forward problem.

// 2) I plan to work on arrays only track to practise my array methods.




// Kata 2
// Description:

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.


// My Solution :

function minMax(arr){
  let res = []
  res[0] = Math.min(...arr)
  res[1] = Math.max(...arr)
  return res
}


//  My Notes on kata :

// 1) Fairly straight forward problem.