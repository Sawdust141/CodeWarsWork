/*
Parameters - a number of seconds to be converted into hours, minutes and seconds
Return - a display of the seconds in the format of HH:MM:SS
Example - 359999 = (99:59:59)
Pseudo - initialise variables for interpolated string return at the end
       - calculate hours and delete that amount in seconds from the input variable
       - calculate minutes and seconds
       - if any of the h,m or s variables have only one digit, add a zero to the beginning
       - return interpolated string
*/

function humanReadable (seconds) {
    let hh = Math.floor(seconds /3600)
    seconds -= hh * 3600
    let mm = Math.floor(seconds/60)
    seconds -= mm * 60
    let ss = seconds % 60
    if (hh < 10)hh = '0' +hh
    if (mm < 10)mm = '0' + mm
    if (ss < 10)ss = '0' + ss
    return `${hh}:${mm}:${ss}`
  }