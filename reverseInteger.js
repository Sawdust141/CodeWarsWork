/*
Take in a number, return the number in reverse, but if the number is negative, keep it negative. if the number is positive, keep it positive.
Split the number, if the first element is not '-', it is not negative, so just return the reversed and joined number.
If the first element is '-', reverse every other element and add the '-' to the beginning afterward
At the end, check the size the of the number to see if it will fit in the 32-bit number limit, if not return 0.
*/

var reverse = function(x) {
    answer = 0
    x = x.toString().split('')
    if (x[0] != '-') {
        answer = x.reverse().join('')
    } else {
        answer = x.splice(1).reverse()
        answer = -answer.join('')
    }
    return answer > 2147483647 || answer < -2147483648 ? 0 : answer
};

/*
I thought reducing the functions to a ternary might speed things up, it only slowed them down and reduced the readability of the function.
*/
var reverse = function(x) {
    x = x.toString().split('')
    answer = x[0] != '-' ? x.reverse().join('') : answer = -x.splice(1).reverse().join('')
    return answer > 2147483647 || answer < -2147483648 ? 0 : answer
};