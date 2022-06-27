function dontGiveMeFive(start, end) {
    let count = 0
    for (i = start; i <= end; i++)
      if (!i.toString().includes('5')) count ++
    return count
  }