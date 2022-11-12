/*
Take a number and add its digits until the result is only one digit long, then return that number.
while loop, checking that the length of number is more than 1
    While it is, reduce() the digits of the num and set it as num
When it isn't, return num.
*/

var addDigits = function(num) {
    while(num.toString().length != 1){
        num = num.toString().split('').reduce((acc,cur) => acc + Number(cur), 0)
    }
    return num
};