/*
Parameters - A number, A string of letters and numbers
Return - List of all '8's and 'B's that are next to eachother to form pairs, and a boolean whether the number of pairs that can be made is greater than or equal to the inputted number.
Example - (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') returns ['B88B', false] Because the string contains all Bs and 8s that are next to eachother, and the number of PAIRS (2) is not greater than 6
Pseudocode -Create pairs variable
            for loop over entire input string
                if this element and the next element create a pair (8+B or B+8), add them to the pairs variable and increment i
            Return pairs and pairs.length
*/

function bears(x, s){
    let pairs = ''
    for (i = 0; i < s.length; i++) {
      if ((s[i] == '8' && s[i+1] == 'B') || (s[i] == 'B' && s[i+1] == '8')) {
        pairs += s[i] + s[i+1]
        i++
      }
    }
    return [pairs, x <= pairs.length/2]
}