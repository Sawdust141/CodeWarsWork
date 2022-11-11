/*
Take in a number, square its digits sum the result. Then repeat the process on the resulting number.
Continue this until you hit 1 or loop back to a number you have already arrived at (beginning to loop).
If you reach 1, return true, else return false.
Initialise an array variable to log the numbers we visit.
While the number we are on only appears once in our log variable,
    sum the squares of the digits in the number we are one
    push the result to the log array
Once we have a repeat, return true if it is 1, and false if it isn't
*/

var isHappy = function(n) {
    let log = [n]
    while (log.indexOf(n) == log.lastIndexOf(n)){
        n = n.toString().split('').reduce((acc,c) => acc + c*c, 0)
        log.push(n)
    }
    return log[log.length-1] == 1
};