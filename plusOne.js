/*
Take in an array of numbers, return the array having added one to the number as a whole.
[1,2,3] returns [1,2,4], [9,9] returns [1,0,0]

Join the array together, add one, split and return
This idea worked, but not with longer numbers for some reason. Maybe because the allocated space for numbers?
*/


var plusOne = function(digits) {
    let num = Number(digits.join(''))+1
    return num.toString().split('')
};

/*
I switched to a looping solution. Here I update the final digit in the given array, then loop through starting at the last digit.
    Check if the number is above 9 (if not, we don't have to do anything.)
        if it is, make this element = 0 AND
            if there is no digit before this one, add one that equals 1, else add 1 to the digit before this one.
    Return the digits array
*/


var plusOne = function(digits) {
    digits[digits.length-1] += 1
    for(i = digits.length-1; i >= 0; i--) {
        if (digits[i] > 9) {
            digits[i] = 0
            i == 0 ? digits.unshift(1) : digits[i-1] += 1
        }
    }
    return digits
};