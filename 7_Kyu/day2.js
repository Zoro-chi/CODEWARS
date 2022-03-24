// KATA FOR THURSDAY, 24/3/2022


// Description:

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)


// My Solution:

function largestPairSum (numbers) {
    let pair = []
    let sorted = numbers.sort((a, b) => b - a)
    pair[0] = numbers.shift()
    pair[1] = numbers.shift()
    return pair[0] + pair[1]
}


// My Notes on kata :

// I only found out this was a 7kyu after submitting. Quite pleased to have finished it quite easily.
// Starting to use sort() everywhere.
// After submitting and seeing the answers posted, my code can be greatly refactored to :
                                function largestPairSum(numbers){
                                numbers.sort(function(a, b){ return b - a });
                                return numbers[0] + numbers[1];
                                }