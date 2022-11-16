/*
Take in an integer and return true if it is a power of three, else return false
While loop, with i initialised to 0.
    If we cube every number, does the result equal the inputted integer?
        if it does, return true
        if our cubed reuslts go past the inputted number, return false.
    
*/

var isPowerOfThree = function(n) {
    i = 0
    while (3**i <= n) {
        if (3**i == n) return true
        else i++
    }
    return false
};