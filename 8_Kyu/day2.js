// KATA FOR THURSDAY, 24/3/2022

// Description:

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


// My Solution:

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2)
  arr3 = arr3.sort((a, b) => a - b)
  finalarr = []
  arr3.filter(num => {
    if (!finalarr.includes(num)){
      finalarr.push(num)
    }
  })
  return finalarr
}

// My Notes on Kata :

// Took 15 mins for this kata. What are the odds we have to use sort() again :) .
// Viewing other answers after the submission and there were some clever ways to refactor my answer.
// I thought javascript had an "in" array method but includes works as well.