/*
Take in a string, return if it is a palindrome, ignoring all punctuation and spaces.
Make entire string lowercase, filter out punctuation and compare the result to itself reversed.
I wanted to avoid using RegEx in this solution, which led to me importing a punctuation variable.
*/

var isPalindrome = function(s) {
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    s = s.toLowerCase().split('').filter(x => !punctuation.includes(x)).join('').split(' ').join('')
    return s == s.split('').reverse('').join('')
}