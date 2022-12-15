function calculateGrade(marks) {
  // start
  let total = 0;
  let average = 0;
  for (i in marks) {
    total = marks[i] + total;
    average = total / marks.length;
  }

  if (average < 60) 
    return "F";
  else if (average < 70) 
    return "D";
  else if (average < 80) 
    return "C";
  else if (average < 90)
    return "B";
  else return "A";
}

const marks = [90, 80, 50];
console.log(calculateGrade(marks));
// export
module.exports = calculateGrade;