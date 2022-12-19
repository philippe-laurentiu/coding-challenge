function countTruthy(array) {
  let count = 0;
  for (let i in array){
   if(array[i]){
    count++;
   }
  }
  return count;
}
const array = [0, null, undefined, "", 2, 'hello', [1,2]];
console.log(countTruthy(array))
// export
module.exports = countTruthy;