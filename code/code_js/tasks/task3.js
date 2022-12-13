// title: FizzBuzz#
// language: js #
// dificulty: ** #
// topic: conditions, functions#

// taskdescription: giving an argument(input) to function fizzBuzz,
//when input is divisible by 3 -> return Fizz, 
//when input is divisible by 5 -> return Buzz
//and input divisible by 3 and 5 -> return FizzBuzz, 
//the input is not divisible -> return the number, 
//when input is not number -> return message 'Not a number'#

// code:
function fizzBuzz(input){
// your code

}

console.log(fizzBuzz(3));
console.log(fizzBuzz(10));
console.log(fizzBuzz(30));
console.log(fizzBuzz(2));
console.log(fizzBuzz('hello'));
// #

// solution:
function fizzBuzz(input){
  if (typeof input !== 'number')
    return 'Not a number';

  if(input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  else if(input % 3 === 0)
    return 'Fizz'
  else if(input % 5 === 0)
    return 'Buzz'
  return input 
}
//#