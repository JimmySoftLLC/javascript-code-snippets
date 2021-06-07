//--------------Big O of object methods---------------------------------------------------------

//  insert O(1)
//  remove O(1)
//  search O(n)
//  access O(1)

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

//------------------------------object define property----------------------------------------
// Define object
var myDefinePropertyObject = { counter: 0 };

// Define setters
Object.defineProperty(myDefinePropertyObject, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(myDefinePropertyObject, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(myDefinePropertyObject, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(myDefinePropertyObject, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(myDefinePropertyObject, "subtract", {
    set: function (value) { this.counter -= value; }
});

myDefinePropertyObject.add = 5;
// myDefinePropertyObject.subtract = 1;
// myDefinePropertyObject.increment;
// myDefinePropertyObject.decrement;
// myDefinePropertyObject.reset;

// console.log(myDefinePropertyObject.counter)

//-------------------------------------object constructor-----------------------------------

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () { return this.firstName + " " + this.lastName; };
}

let obj1 = {};            // new object
let obj2 = "";            // new primitive string
let obj3 = 0;             // new primitive number
let obj4 = false;         // new primitive boolean
let obj5 = [];            // new array object
let obj6 = /()/;          // new regexp object
let obj7 = function () { };  // new function object

let myFather = new Person("John", "Doe", 50, "blue");

//console.log(myFather);

// -----------------------------add key value pair------------------------------------------------

let keyPairObject = {};

keyPairObject.myNewKey1 = "value1";

keyPairObject["myNewKey2"] = "value2";

// console.log(keyPairObject)

// -----------------------------delete value pair------------------------------------------------

delete keyPairObject.myNewKey1

delete keyPairObject["myNewKey2"]

// console.log(keyPairObject)
// console.log(keyPairObject['myNewKey2'])

//-----------------------------iterate over an object--------------------------------------------

let interateObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    function1: function () {
        return this.key1 + " " + this.key2;
    },
}

function listIterateObj(obj) {
    for (myKey in obj) {
        // console.log(myKey + "  " + obj[myKey]);
    }

}

listIterateObj(interateObj);

// Object.values(interateObj).forEach((value, index) => { console.log(index, value) });

// -------------------------------sorting by key value----------------------------------------

let myUnSortedOject = [
    { name: 'Dude1', keyName: 'a' },
    { name: 'Dude2', keyName: 'd' },
    { name: 'Dude3', keyName: 'b' },
    { name: 'Dude4', keyName: 'c' }
]

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const keyA = a.keyName.toUpperCase();
    const keyB = b.keyName.toUpperCase();

    let comparison = 0;
    if (keyA > keyB) {
        comparison = 1;
    } else if (keyA < keyB) {
        comparison = -1;
    }
    return comparison;
}

let mySortedOject = myUnSortedOject.sort(compare);

console.log(mySortedOject);



