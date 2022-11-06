/*
Take in a number, return if it is a power of 2.
while the number is greater than 1,  divide it by 2, if it reaches 1 then it is a power of 2.
*/

var isPowerOfTwo = function(n) {
    while (n > 1)n /= 2
    return n == 1
};