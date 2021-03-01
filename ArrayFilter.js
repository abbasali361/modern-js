// Array findIndex() method - Modern JavaScript Syntaxes

var N = [1, 2, 3, 4, 5, 6, 8, 9, 10]
var result =  N.filter( (currentValue , currentIndex, arr) => {
    return currentValue > 5;
})

// console.log(N);

console.log(result);