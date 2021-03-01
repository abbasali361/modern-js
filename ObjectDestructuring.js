// Destructuring - Modern JavaScript Syntaxes

// const user = {
//     id: 202015014,
//     name: 'root',
//     age: 24,
// }

// var name = user["name"];
// console.log(name);

// const user = {
//     id: 202015014,
//     name: 'root',
//     age: 24,
// }

// const { name: title } = user;
// console.log(title);


// const user = {
//     id: 202015014,
//     name: 'root',
//     age: 24,
//     education: {
//         Degree: 'BSC',
//     },
// };

// const { education: { Degree } = {} } = user;

// console.log(Degree);


const user = {
    id: 202015014,
    name: 'root',
    age: 24,
    // education: {
    //     Degree: 'BSC',
    // },
};

const { education: { Degree } = {} } = user;

console.log(Degree);