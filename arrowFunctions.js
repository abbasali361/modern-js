// ES6 fat Arrow  Function 

// function number() {
//     return 10;
// }

// let number = () => 2
//

// let number = () => {
//     console.log(2);
// }
// number();

// let number = () => console.log(2);
// number();

// If there is a parameter

// let number = n => 2 // single parameter
// console.log(number());

// let number = (a ,b) =>{
//     return a + b;
// } 
// console.log(number(5,3));

var javascript = {
    name: 'javascript',
    libraries: ['react', 'angular', 'vue'],
    printLibraries: function () {
        this.libraries.forEach(function(a){
           var self = this;
            console.log(`${self.name} Loves ${a}`);
        })
    }
}


javascript.printLibraries()

