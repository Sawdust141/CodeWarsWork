/*
Take in a string, return the length of the last word. There may be spaces at the end of the string
'Hello, world' returns 5 because world is 5 letters long

Trim the string and split it, choose the last element in the created array and return the length.
*/

var lengthOfLastWord = function(s) {
    return s.trim().split(' ')[s.trim().split(' ').length-1].length  
};

/*
I wanted to see if using a for loop in reverse would have been quicker, but it turned out to be slower
*/

var lengthOfLastWord = function(s) {
    let count = 0
    for(i = s.length -1; i >= 0; i--) {
        if (s[i] != ' ') count++
        else if (s[i] == ' ' && count > 0) return count
    }
    return count
};