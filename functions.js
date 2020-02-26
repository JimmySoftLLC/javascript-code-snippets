// --------------------ordinary function----------------------------------------

function myOrdinaryFunction(a, b) {
    return a * b;
}

// console.log(myOrdinaryFunction(2, 2));

// ---------------------funtion expression-----------------------------------

var myFunctionExpression = function (a, b) { return a * b };

// console.log(myFunctionExpression(2, 2));


// ---------------------arrow function-----------------------------------

const myArrowFunction = (a, b) => { return a * b }

// console.log(myArrowFunction(2, 2));

// -----------------------function constructor-----------------------------------

function myFunctionConstructor(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
    this.printStuff = function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

var x = new myFunctionConstructor("Dude", "Person");

// x.printStuff();                   