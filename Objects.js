//--------------Big O of array methods---------------------------------------------------------

//  insert O(1)
//  remove O(1)
//  search O(n)
//  acces O(1)

//--------------intializing---------------------------------------------------------------------

let myObject = {}  // sets up empty object

let person = {
    // name: values pairs are called properties
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    // name: functions pairs are called methods
    fullNameFunction: function () {
        return this.firstName + " " + this.lastName;
    },
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
};

// console.log(person.fullNameFunction() + " has " + person['eyeColor'] + " eyes.");
// console.log(person.fullNameFunction() + " has " + person.eyeColor + " eyes.");

function ListAllPropertiesOfPerson(person) {
    for (myItem in person) {
        console.log(myItem + "  " + person[myItem]);
    }
}

// ListAllPropertiesOfPerson(person);

//------------------------------object define property----------------------------------------
// Define object
var obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

//-------------------------------------object constructor-----------------------------------

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () { return this.firstName + " " + this.lastName; };
}

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);

//------------------------------------built in constructors---------------------------------
let x1 = new Object();    // A new Object object
let x2 = new String();    // A new String object
let x3 = new Number();    // A new Number object
let x4 = new Boolean();   // A new Boolean object
let x5 = new Array();     // A new Array object
let x6 = new RegExp();    // A new RegExp object
let x7 = new Function();  // A new Function object
let x8 = new Date();      // A new Date object

// use these instead

let x1b = {};            // new object
var x2b = "";            // new primitive string
var x3b = 0;             // new primitive number
var x4b = false;         // new primitive boolean
var x5b = [];            // new array object
var x6b = /()/;          // new regexp object
var x7b = function () { };  // new function object