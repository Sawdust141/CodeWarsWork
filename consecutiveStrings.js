/*You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.*/

function longestConsec(strarr, k) {
    if (k < 1 || k > strarr.length) return ""
    let maxstr = ''
    for (i = 0; i < strarr.length - (k -1); i++){
      let currentstr = ''
      for (j = 0; j < k; j++) currentstr += strarr[i+j]
      if (currentstr.length > maxstr.length) maxstr = currentstr
    }
  return maxstr
}