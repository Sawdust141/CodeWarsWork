/*
Take in a string and remove pairs of letters that are next to eachother where one is uppercase and the other is lowercase
Eg: 'leEeetcode' returns 'leetcode'
Eg: 'AabBcC' return returns ''
Some pairs will be created by removing pairs eg: AbBaCc also returns '' because after the bB is removed, A and a will move together. Remove that pair also.
Split the string into array
Use a checking value to validate a while loop
    immediately set the checker to false
    for loop stopping 1 short of the length of the array (eg: if passed 'leetcode', stop at the 'd')
        if an element and the following element are not the same, but ARE the same when they are both put into lowercase
            splice out the two letters,
            set the checker to true (allowing the loop to run again incase we created any new pairs, as shown in example)
            decrement i by one (so we don't skip the next letter)
return the array joined together
*/

var makeGood = function(s) {
    s = s.split('')
    let checker = true
    while (checker) {
        checker = false
        for (i = 0; i < s.length - 1; i++) {
            if(s[i] != s[i+1] && s[i].toLowerCase() == s[i+1].toLowerCase()){
                s.splice(i,2)
                checker = true
                i -= 1
            }
        }
    }
    return s.join('')
};