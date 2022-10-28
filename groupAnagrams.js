/*
Take in an array of strings and return them grouped into anagrams
I went through many iterations of this code and this is the closest I could get and it didn't run fast enough to pass the longer tests.
This tells me it works, but not efficiently enough.
Loop through, filtering though for words that are anagrams of this element
    Do this by comparing element.sort() to every other element.sort()
    You need to split first and join after
    Create a tester (record of the group you've made's first element), add each unique group's first element to that tester variable,
        if this filtered group's first element isn't in that group, we have found these anagrams for the first time so we can push them to the answer variable.
This took a long time so failed the tests.
*/

var groupAnagrams = function(strs) {
    let answer = []
    let tester = []
    let anas
    strs.forEach((word, index) => {
        anas = strs.filter(value => value.split('').sort().join('') == word.split('').sort().join('')).sort()
        if (!tester.includes(anas[0])) answer.push(anas)
        tester.push(anas[0])
        
        
    })
    return answer.sort((a,b) => a.length - b.length)
};

/*
Surprisingly I wasn't too far off, this is a much more clear and concise solution.
I found this online without pseudocode, I have added the pseudocode below:

*/
const groupAnagrams = function(strs) {
    // Create groups object
    let groups = {}
    // Iterate through every element in the given array
    strs.forEach(str => {
        // Sort the element alphabetically (This is the simplest way to compare anagrams)
        const sortedStr = str.split('').sort().join('')
        // Check if the groups object contains the sorted element as a key
        if (groups[sortedStr]) {
            // If it does, add the UNSORTED element as a value to the SORTED element key. 
            // (This will create an array of unsorted variables as a value where their key is their sorted version.)
            // I.E: 'aet' = ['ate', 'eat', tea']. 'aet' is the key to the three values.
            groups[sortedStr].push(str)
        // If the groups object doesn't contain the sorted element as a key
        } else {
            // Create the SORTED element as a key, and store the UNSORTED element as its first value
            groups[sortedStr] = [str]
        }
    })
    // Return the values of the groups object.
    return Object.values(groups)
};