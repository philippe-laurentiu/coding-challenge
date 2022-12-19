const y = [1, 4, 3, 2];
const max = getMax(y);
console.log(max);

function getMax(array){
  return array.reduce((accumulator, element) => {
    if(element > accumulator ){
    accumulator = element
    }
    return accumulator
  })
}
// export
module.exports = getMax;