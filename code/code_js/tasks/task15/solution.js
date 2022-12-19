function countOccurrences(array, seachElement){
  return array.reduce((times, element) => {
    if(element === seachElement) {
      times += 1;
    } 
    return times
  },0)
}

const x = [1, 2, 1, 4];
const counting = countOccurrences(x, 1);
console.log(counting);

// export
module.exports = countOccurrences;