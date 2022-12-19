const movies = [
  {title: 'Avatar', year: 2009, rating: '8.2'},
  {title: 'Batman Returns', year: 1992, rating: '9.1'},
  {title: 'Creed', year: 2015, rating: '9.5'},
  {title: 'Django', year: 2012, rating: '8.7'}
];

const result = movies
.filter((element) => element.year > 2000 && element.rating > 8.5)
.sort((a,b) => (a.rating < b.rating) ? 1 : -1)

result.map((e) => console.log(e.title))
// export
module.exports = result;