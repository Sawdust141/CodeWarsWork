/*
Take in number, return if number is a palindrome (reads the same in reverse)
Cannot reverse() a number, convert to string, split reverse join and return comparison with original.
*/

var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('')
};