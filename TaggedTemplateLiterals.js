// Tagged Template Literals - Modern JavaScript Syntaxes

var a = "sakib";
var b = "sumon";
var c = "saimun";

console.log(modifier`We Have ${a} & ${b} & ${c} to My university Batch mad`);

function modifier(strings, ...values) {
    const modifierValue = strings.reduce((previousValue, currentValue) => {
        return previousValue + currentValue + (values.length? "Mr." + values.shift() : "")
    }, "");
    return modifierValue
}