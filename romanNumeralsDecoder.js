/*
Parameters - A string of roman numerals
Return - The roman numerals converted into a number
Example - XXI returns 21
Pseudocode -1. Create key, assigning all roman numberals a corresponding numeric value
            2. Map new array by returning the numeric value of each roman numeral given
            3. Add the numbers in the newly mapped array together, unless the number is smaller than the following number, inwhich case add the next number and subtract the current number. Then skip the next number.
            4. Return the answer
*/

function solution (roman) {
    let key = {M: 1000, D: 500, C: 100, L: 50, X: 10, V:5, I: 1 }
    let keyed = roman.split('').map(x =>key[x])
    let answer = 0
    for (i = 0; i < keyed.length; i++) {
      if(keyed[i] < keyed[i+1]){
        answer += keyed[i+1] - keyed[i]
        i++
      } else {
        answer += keyed[i]
      }
    }
      return answer;
}

//This can be better


/*
This is much better. We create the key. Then in one line do the following:
Split the inputed string with split;
Replace the numeral inputs with their numeric counterparts, as found in the key object;
Add the numeric value together, but if a smaller number comes before a larger number, we simply subtract the smaller number instead of adding it
This is finally returned as the answer without having to declare any variables. Maybe less readable, but simpler to run through.
*/
function solution (roman) {
    let key = {M: 1000, D: 500, C: 100, L: 50, X: 10, V:5, I: 1 }
    return roman.split('')
                .map(x =>key[x])
                .reduce((acc,c,i,a)=> c < a[i+1] ? acc-c : acc+c, 0)
}