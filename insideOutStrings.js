/*
Parameters - a string sentence
Return - The sentence, with words changed so the inner letters become the outer letters. (Both halves of the words are reversed)
Example - volcano returns lovcona, bread returns rbeda, cats returns acst. 'what time are we climbing up the volcano') returns 'hwta item are we milcgnib up the lovcona'
Pseudocode - split the sentence, map new array, join at the end
             if the word is longer than 3 letters, reverse the first half, reverse the second half, if the word length is odd, return with the middle letter added back in.
*/

function insideOut(x){
    return x.split(' ').map((x,i,a) => {
      if (x.length > 3){
        let half1 = x.slice(0,(Math.floor(x.length /2))).split('').reverse().join('')
        let half2 = x.slice(Math.ceil(x.length /2)).split('').reverse().join('')
        return x.length % 2 ? `${half1}${x[Math.floor(x.length/2)]}${half2}` : half1 + half2
      } else return x
    }).join(' ')
  }