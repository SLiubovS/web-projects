
const objects51 = function () {

   let squares =[
       {a: 1, b: 3, c: 5, d: 2},
       {a: 2, b: 4, c: 6, d: 7},
       {a: 3, b: 6, c: 7, d: 9},
       {a: 4, b: 3, c: 8, d: 10}
   ];

   let results = squares.filter(item => item.b === 3);

   for (let result of results) {
       alert(`a=${result.a}, b=${result.b}, c=${result.c}, d=${result.d}`);
   }

};