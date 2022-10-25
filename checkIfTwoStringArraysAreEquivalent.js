/*
Take two different string array and return true if they are equivalent, else false
eg: ['ab', 'c'], ['a','bc'] returns true because the letters and the order are the same
Join all strings within the arrays together and compare, return the outcome
*/

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('')
};