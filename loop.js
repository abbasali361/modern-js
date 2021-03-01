//  for loop, for in & for of - Modern JavaScript Syntaxes 

//  for loop block scope
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let i = 1
// for (; ; i++) {

//     if (i <= 5) {
//         console.log(i);
//     }
//     else {
//         break;
//     }
// }

//  For In Loop

// const obj = {
//     name: 'todo',
//     age: 25,
//     founder: 'fin'
// }

// for (property in obj) {
//     console.log(property);
// }


// for of

const Arr = [1, 2, 3, 4]

for (element in Arr) {
    console.log(element);
}

const str = "i love javascript"

for (element of str) {
    console.log(element);
}