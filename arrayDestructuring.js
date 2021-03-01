//  Destructuring - Modern JavaScript Syntaxes

var numbers = [1, 2, [5, 4, 12, 11], 5, 6]
var [, , [a,  ,b]] = numbers;

console.log(a, b);