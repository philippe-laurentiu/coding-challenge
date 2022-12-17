function except(array, excluded){
  for(let i in excluded){
    for(let j in array)
      if(excluded[i] === array[j]){
        array.splice(j, 1)
      }
  }
  return array
}
const array = [1, 2, 3, 4, 1];
const output = except(array,[1,2]);
console.log(output);
// export
module.exports = except;