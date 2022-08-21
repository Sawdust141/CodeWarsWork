/*
Parameters - String of a mix of letters and #
Return - # means remove the previous letter. Do so and remove the #'s as well
Example - "abc#d##c" ==>  "ac"
Pseudocode -For loop through the string as an array. If the element is a #, make the previous element a #.
            But if the previous element is a #, make the one before THAT a # (using a while loop)
            Filter the array for # and return

*/
function cleanString(s) {
    s = s.split('')
    for(i = 0; i < s.length; i++){
     if (s[i] == '#'){
        if (s[i-1] == '#'){
          let j=1
          while (s[i-j] == '#') j++
          s[i-j] = '#'
        } else s[i-1] = '#'
     }
    }
    return s.filter(x => x != '#').join('')
}

/*
Found this code hideous, went looking for a better solution and built this out of what I found.
Much better as using pop and push is much simpler to code. Must bare in mind!
*/

function cleanString(s) {
let answer = []
s.split('').forEach(x=> x == '#' ? answer.pop() : answer.push(x))
return answer.join('')
}