// --------------------ordinary function----------------------------------------

function myOrdinaryFunction(a, b) {
    return a * b;
}

console.log(myOrdinaryFunction(1, 1));

// ---------------------function expression-----------------------------------

var myFunctionExpression = function (a, b) { return a * b };

console.log(myFunctionExpression(1, 2));

// ---------------------arrow function-----------------------------------

const myArrowFunction = (a, b) => { return a * b }

console.log(myArrowFunction(1, 3));

// -----------------------function constructor-----------------------------------

function myFunctionConstructor(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
    this.printStuff = function () {
        return this.firstName + " " + this.lastName
    }
}

var x = new myFunctionConstructor("John", "Doe");

console.log(x.printStuff());