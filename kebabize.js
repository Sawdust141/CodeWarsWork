/*
Parameters - A string, most likely a regular sentence, written in camelcase
Return - The given string 'kebabized' - Only letters remain, and instead of camelcase, the words are split with dashes (-)
Example - kebabize('camelsHaveThreeHumps') returns camels-have-three-humps; kebabize('camelsHave3Humps') returns camels-have-humps
Pseudocode -Split the given string into an array of individual letters.
            Filter this array, removing everything except letters.
            Create a new array using map, 
                if an element is in uppercase we must return it in lowercase with a dash in front of it. Otherwise, return the element (it will be in lowercase)
                This works unless we have a capital letter as the 0th element, inwhich case we must return the element in lowercase only (no dash)
                Therefore, we must check if the element is uppercase and is not the 0th element, 
                    if both are true return a dash and lowercase, else return the element in lowercase (most will be in lowercase, this is to convert to 0th element if need be)
*/

function kebabize(str) {
    return str.split('')
              .filter(x => x.toLowerCase() != x.toUpperCase())
              .map((x,i) => x == x.toUpperCase() && i > 0 ? `-${x.toLowerCase()}` : x.toLowerCase())
              .join('')
}