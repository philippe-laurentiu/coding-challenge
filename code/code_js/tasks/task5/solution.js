function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " EVEN");
    } else console.log(i + " ODD");
  }
}

showNumber(12)

// export
module.exports = showNumber;