const movies = [
  {title: 'a', year: 2018, rating: '4.5'},
  {title: 'b', year: 2018, rating: '4.7'}, 
  {title: 'c', year: 2018, rating: '3'},
  {title: 'd', year: 2017, rating: '4.5'}
];

movies
.filter((element) => element.year === 2018 && element.rating > 4)
.sort((a,b) => (a.rating < b.rating) ? 1 : -1)
.map((e) => console.log(e.title))
// export
module.exports = add;