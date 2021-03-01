// Rest Operator - Modern JavaScript Syntaxes

// function myFunc(...params) {
//     console.log(params);
// }
// myFunc(1, 2, 4, 5,)


function myFunc(a, ...params) {
    console.log(params);
    console.log(a);
}
myFunc(1, 2, 4, 5,)