/*
Take in a string, find the longest substring within it that has no repeating characters and return the length.
eg: abcda returns 4 because abcd has no repeating letters and has a length 4
split and forEach through the word,
    initialise substring variable for this time round the loop
    for loop for remainder of word
        if the substring doesn't include the next letter in the word, add it to the substring 
            and check substring length against longest substring found so far, if new longest is found, update max
        if substring does include the next letter, skip to the end of this inner loop
    return length of max substring.
*/

var lengthOfLongestSubstring = function(s) {
    max = s[0]
    s.split('').forEach((x,i,a) =>{
        sub = a.slice(i,i+1)
        for (let j = i+1; j < a.length; j++) {
            if (!sub.includes(a[j])){
                sub += a[j]
                if (sub.length > max.length) {
                    max = sub
                }
            } else j = a.length
        }
    })
    return max != undefined ? max.length : 0
}