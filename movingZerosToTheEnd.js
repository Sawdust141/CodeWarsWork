// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let next = arr.filter(x => x !== 0)
    let diff = arr.length - next.length
    for (i = 0; i < diff; i++) {
      next.push(0)
    }
    return next
  }