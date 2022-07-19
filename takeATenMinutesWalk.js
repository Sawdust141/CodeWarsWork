/*
Parameters - array of letters N,E,S,W
Return - if the length of a walk is 10 and returns home
Example - N,S returns home but isn't 10 long. W x 10 is ten long but doesn't return home. Both return false
Pseudo - Initialise variables (x,y) , loop through and edit variables accordingly, 
        return if correct length and finishing location
*/

function isValidWalk(walk) {
    let x = 0
    let y = 0
    walk.forEach(el => {
        if (el == 'n') y++
        if (el == 'e') x++
        if (el == 's') y--
        if (el == 'w') x--
    })
    console.log(y,x)
    return (x == 0 && y == 0 && walk.length == 10)
}