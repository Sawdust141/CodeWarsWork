/*
Parameters - A string
Return - The consecutive consonants in that word counted together by their position in the alphabet. Return the maximum of these counts. 
Example - solve("zodiacs") returns 26. Because z//d//cs = 26//4//3+19. The Max of these is 26.
Pseudocode - Create arrays for alphabet and vowels.
             forEach loop, if the letter is in vowel, current count get set to zero
                           otherwise the letter is a consonant, so we add it's position in the alphabet to the current count
                           At the end of each iteration, if the current count is larger than the max, make max equal to current count.
                           Return the max at the end.
*/
function solve(s) {
    let vowels = ['a','e','i','o','u']
    let alphabet = ['.','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let max = 0
    let cur = 0
    s.split('').forEach(x => {
      if (vowels.includes(x))cur = 0
      else cur += alphabet.indexOf(x)
      if (cur > max)max = cur
    })
    return max
  };