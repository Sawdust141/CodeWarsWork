/*
Take in a matrix of numbers, return if all diagonal right-down indices match
example:
[[1,2,3,4],
 [5,1,2,3],
 [9,5,1,2]]

This will return true, because each value matches the value one down and one the right of it.

Loop through, start each loop 1 index in, because we are going to look at the index behind it.
    Nested loop, if this index doesn't match the index [-1][-1] (above and left), return false
If we get to the end without returning false, return true
*/

var isToeplitzMatrix = function(m) {
    for(y = 1; y < m.length; y++){
        for(x = 1; x < m[0].length; x++) {
            if (m[y][x] != m[y-1][x-1]) return false    
        }
    }
    return true
};