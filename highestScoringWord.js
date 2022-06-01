/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/



function high(x){
    let cipher = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let words = x.split(' ')
    let rest = []
    for(i = 0; i < words.length;i++) {
      rest[i] = words[i]
                  .split('')
                  .map(letter => letter = cipher.indexOf(letter))
                  .reduce((acc,c) => acc + c,0)
      }
    let answer = rest.indexOf(Math.max(...rest))
    return words[answer]
    
  }