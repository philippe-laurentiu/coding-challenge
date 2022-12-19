function speedCheck(speed) {
  let points = 0;

  if (speed < 75)
    return "OK";
    
  if (speed >= 75) points = Math.floor((speed - 70) / 5);
  if (points < 12)
    return points;
  return "Licence suspended";
}

// export
module.exports = speedCheck;