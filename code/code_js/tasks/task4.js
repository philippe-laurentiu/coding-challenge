// title: Speed check#
// language: js #
// dificulty: ** #
// topic: conditions, functions#
// taskdescription: Checking speed using the function. Speed limit is 70km/h,
// when under 70, -> return 'OK'
// if it is not, giving a point for each +5km/h, the point system starts from 75. (e.g. 88 is 3 points.) 
// use Math.floor()
// Until the points reaches 12 points -> return the points
// when points reaches 12 -> return 'Licence suspended'


// code:
function speedCheck(speed){
  // your code
}

console.log(speedCheck(50));
console.log(speedCheck(97));
console.log(speedCheck(200));

// #

// solution:
function speedCheck(speed) {
  let points = 0;

  if (speed < 75)
    return "Ok";
    
  if (speed >= 75) points = Math.floor((speed - 70) / 5);
  if (points < 12)
    return "point: " + points;
  return "Licence suspended";
}