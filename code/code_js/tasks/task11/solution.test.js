const f = require('./solution.js');

test('showing 8 numbers', () => {
  const logSpy = jest.spyOn(console, 'log');
  const limit = 10
  f(limit)
  // let primes = [];
  for(let i = 2; i <= limit; i++){
    if(isPrimenumber(i)) {
      expect(logSpy).toHaveBeenCalledWith(i)
    } else {
      expect(logSpy).not.toHaveBeenCalledWith(i)
    }  
  } 
});

function isPrimenumber(num){
  for(let i = num - 1; i > 1; i--){
    if(num % i === 0)
      return false
  }
  return true
}
