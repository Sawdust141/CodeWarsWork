/*
Take an array of words, and a number
Give back the most frequent words, but only the top 'k' amount where k is a given number
Eg: ['the', 'dog', 'and', 'the', 'cat', 'like', 'the', 'cat'], 2 returns ['the','cat]. If there are more than one word with the same count, sort them alphabetically.
Create object showing count of each word.
While loop, checking if we have reached 'k' number of words yet
    create temp array, adding all words of highest count
    sort temp array alphabetically and add each element to answer array
At end of while loop, return slice of answer
*/

var topKFrequent = function(words, k) {
    let count = {}
    let max = 0
    words.forEach(x =>{
        count[x] ? count[x]++ : count[x] = 1
        if (count[x] > max) max++
    })
    let answer = []
    while (answer.length < k){
        let temp = []
        for (x in count) if (count[x] == max) temp.push(x)
        for (x of temp.sort()) answer.push(x)
        max--
    }
    return answer.slice(0,k)
}

/*
The while loop could be quicker. Using .concat() instead of the second for loop could help, but I can't concat to empty array it seems.
*/