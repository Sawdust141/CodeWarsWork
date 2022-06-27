/*Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

function solution(str){
    let split = str.split('')
    if (split.length % 2 != 0){split.push('_')}
    let answer = []
    for(i = 0; i < str.length; i += 2){
      answer.push(split[i] + split[i+1])
    }
    return answer
  }