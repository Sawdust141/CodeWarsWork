/*
Parameters - An arr
Return - If the given array only contains integers, return true, else false
Example - [1,1,1] returns true. [3,4,0.5] returns false
Pseudocode - use every() to check type of each element and if it is divisible by 1.
*/

function isIntArray(arr) {
    if (!arr) return false
    return arr.every(x => typeof x === 'number' && x % 1 == 0 && !isNaN(x))
}