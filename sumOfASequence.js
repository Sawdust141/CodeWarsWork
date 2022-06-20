/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0*/

const sequenceSum = (begin, end, step) => {
    let answer = 0
    for(i=begin; i<=end; i += step) {
      answer += i
    }
    return answer
  }