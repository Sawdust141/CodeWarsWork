/*
Take in a string and a goal, if the string can be rotated (put 0th element at the end) until it matches the goal, return true, else false.
for loop as long as string
    push and shift
    if it matches, return true
no match, return false
*/

var rotateString = function(s, goal) {
    s = s.split('')
    for (i =0 ; i < s.length;i++){
        s.push(s[0])
        s.shift()
        if (s.join('') == goal) return true
    }
    return false
};