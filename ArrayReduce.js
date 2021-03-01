// Array reduce() method - Modern JavaScript Syntaxes\

var numbers = [1, 2, 3, 4, 5, 6]

var result = numbers.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue;
}, 0)

console.log(result);