function sum(limit) {
  let total = [];
  for (i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      total.push(i);
  }
  let sum = 0
  for (i in total) {
    sum = sum + total[i]  
  }
  return sum
}
console.log(sum(10));
// export
module.exports = sum;