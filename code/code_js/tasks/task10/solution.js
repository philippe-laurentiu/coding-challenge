function showStars(row) {
  for(let i = 1; i <= row; i++){
    let stars = ''
    for(let j = 1; j <= i; j++)
      stars += '*'
    console.log(stars)
  } 
}

// export
module.exports = showStars;