/*
Take a word, reverse the order of the vowels and return it.
Eg: 'hello' returns 'holle'
Make variable storing lower and upper case vowels
Loop through, logging the order of vowels in an array, then reverse the array
Loop through again, when we find a vowel, replace it with the next letter in the order array.
Join and return.
*/

var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU'
    let order = []
    s = s.split('')
    s.forEach(x => {
        if (vowels.includes(x)) order.push(x)
    })
    order = order.reverse()
    answer = []
    o = 0
    s.forEach(x => {
        if (vowels.includes(x)) {
            answer.push(order[o])
            o++
            } else answer.push(x)
    })
    
    return answer.join('')
};