/*
Parameters - A number, with no comma separation into thousands
Return - The number with comma separation
Example - 1000 returns 1,000, 1000000 returns 1,000,000
Pseudocode -Convert into a string, split and reverse
            Map new array, if the index is divisible by 3, place a comma at the end, else return just the element
            reverse, join and return
            One thing I forgot as I was writing this was that the 0th index is divisible by 3, 
                so added the check for i > 0 to my map my conditional
*/

function groupByCommas(n) {
    return n.toString()
            .split('')
            .reverse()
            .map((x,i) => i % 3 == 0 && i > 0 ? `${x},` : x)
            .reverse()
            .join('')
  }