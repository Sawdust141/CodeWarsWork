/*
Take in an integer and return if it is a power of 4, meaning return if 4**anything = n
Initialise i as 0,
    loop through, if 4**i =n, return true
if we reach a number that becomes bigger than n, return false. 
*/

var isPowerOfFour = function(n) {
    i = 0
    while (4**i <= n){
        if (4**i++ == n) return true
    }
    return false
};