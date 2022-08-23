/*
Parameters - Speed of first tortoise, Speed of second tortoise, the second tortoise's lead
Return - How long will it take for the first tortoise to catch up? If it will never catch up, return null
Example - 720, 850, 70) returns [0, 32, 18]
Pseudocode - Convert the numbers into seconds of lead. lead/(v2-v1) * 3600
		  Convert the seconds into clocktime using my previously made code!
*/
function race(v1, v2, g) {
    let seconds = g/(v2 - v1) * 3600
    if (v2 - v1 <= 0) return null
    let hh = Math.floor(seconds /3600)
    seconds -= hh * 3600
    let mm = Math.floor(seconds/60)
    seconds -= mm * 60
    let ss = Math.floor(seconds% 60)
    return [hh, mm, ss]
  }