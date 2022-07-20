/*
Parameters - Passes in array of people that like something
Return - A grammatically correct sentence listing the array of people
Example - Comma separated list ie: John, Bob and 5 others like this.
Pseudo - create switch cases for 0, 1 and 2 length. default will create interpolated template which includes the number of extra people that are not named at the beginning of the sentence.
*/

function likes(names) {
    switch (names.length) {
      case 0: return 'no one likes this'; break
      case 1: return `${names[0]} likes this`; break
      case 2: return `${names[0]} and ${names[1]} like this`; break
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` 
    }
  }