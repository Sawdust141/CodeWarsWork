/*
Parameters - a queue of customers showing how long they will take to checkout, the number of tills available to check them out
Return - How long will it take the queue to be fully checked out? As one till becomes free, the next customer goes to it.
         The customers move in order, but the tills DONT. They check out the next customer whenever the till is free.
Example - ([10,2,3,3], 2) should return 10
          because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished.
Pseudocode -
*/

function queueTime(customers, n) {
    let tills = Array(n).fill(0)
    customers.forEach(x => tills[tills.indexOf(Math.min(...tills))] += x)
    return Math.max(...tills)
}