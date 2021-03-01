// Spread Operator - Modern JavaScript Syntaxes

// var numbers = [1, 2, 3];

// var newNumbers = [numbers[0], numbers[1], 4, 5, 6,]

// console.log(newNumbers); // [ 1, 2, 4, 5, 6 ]

// var numbers = [1, 2, 3];

// var newNumbers = [...numbers, 7, 8, 9,]

// console.log(newNumbers);

// var numbers = [1, 2, 3];

// var a = [...numbers];

// numbers.push(4);

// console.log(numbers);

// console.log(a);

// var numbers1 = [1, 2, 3];
// var numbers2 = [5, 6, 4];

// var numbers = [...numbers1, ...numbers2];

// console.log(numbers);


const obj1 = {
    x: 1,
    y: 2
}

const obj2 = {
    a: 1,
    b: 2
}

console.log({
    ...obj1,
    ...obj2
});