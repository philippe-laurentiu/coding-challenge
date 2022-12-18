const numbers= [1, 2, 3, 4];
const position1 = move(numbers, 0, 1);
const position2 = move(numbers, 0, -1);
const position3 = move(numbers, 3, 3);
console.log(position1);
// console.log(position2);
// console.log(position3);

function move(array, index, offset){
  const position = index + offset;
  if(position >= array.length || position < 0){
    console.error('Invalid offset')
    return;
  }
  const arr = [...array]
  const element = arr.splice(index, 1)[0]
  arr.splice(index + offset, 0, element);
  return arr
}

// export
module.exports = move;