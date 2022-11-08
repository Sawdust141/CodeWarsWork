/*
In a number made up of 6s and 9s, by changing 1 number from a 6 to a 9, make the biggest number possible.
Eg: 9669 returns 9969
Split into array, first index of '6' becomes '9', return joined array
*/

var maximum69Number  = function(num) {
    num = num.toString().split('')
    num[num.indexOf('6')] = '9'
    return num.join('')
};

/*
This solution is quicker, instead of using built-in functions we just loop through looking for the first 6, 
if we don't find a 6 just return the array joined together 
*/

var maximum69Number  = function(num) {
    num = num.toString().split('')
    for(i = 0; i < num.length; i++) {
        if (num[i] == '6') {
            num[i] = '9'
            return num.join('')
        }
    }
    return num.join('')
};

/*
Final step, just some destructing to quickly turn our number into an array
*/

var maximum69Number  = function(num) {
    array = [...String(num)]
    for(i = 0; i < array.length; i++) {
        if (array[i] == '6') {
            array[i] = '9'
            return array.join('')
        }
    }
    return num
};