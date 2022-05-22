const binaryArrayToNumber = arr => {
    // your code
    let answer = 0
    let val = 2**(arr.length -1)
    arr.forEach((x,i) => {
      x == 0 ? answer += 0: answer += val
      val /= 2
    })
    return answer
  };