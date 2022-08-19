/*
Parameters - Sting of names, separated by ';', then the first and last name split by ';'
Return - The string, as an array, with names in the format of  (LASTNAME, FIRSTNAME), sorted alphabetically
Example - John:Bell;Alexis:Wahl returns (BELL, JOHN)(WAHL, ALEXIS)
Pseudocode - split into names, put the names into uppercase, reverse their order so last name is first. Sort alphabetically.

My pseudocode was pretty limited, my code for reordering the names, could've been better. Instead of interpolating, I could have used reverse()
*/

function meeting(s) {
    return s.split(';')
            .map(x => x.split(':'))
            .map(x => `(${x[1].toUpperCase()}, ${x[0].toUpperCase()})`)
            .sort()
            .join('')
}  