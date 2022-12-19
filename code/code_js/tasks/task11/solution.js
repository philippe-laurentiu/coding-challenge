function showPrimes(limit) {
  // let primes = [];
  for(let i = 2; i <= limit; i++){
    if(isPrimenumber(i))
      console.log(i)
  }
}
function isPrimenumber(num){
  for(let i = num - 1; i > 1; i--){
    if(num % i === 0)
      return false
  }
  return true
}

showPrimes(20)

// export
module.exports = showPrimes;