/*
Parameters - A sentence as a string
Return - The sentence reduced down to a hashtag (spaces removed, # at the start), if the hashtag is longer than 140 characters, return false
Example - " Hello there thanks for trying my Kata"  returns  "#HelloThereThanksForTryingMyKata"
Pseudocode -Split the string and map a new array
                return the existing word with the first letter capitalised
            Join
*/

function generateHashtag (str) {
    let hash = str.split(' ')
                  .map(x => x[0] != undefined ? x[0].toUpperCase() + x.slice(1) : undefined)
                  .join('')
    return hash.length < 140 && hash.length > 1 ? '#' + hash : false
}