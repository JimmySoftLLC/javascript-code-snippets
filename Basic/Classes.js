// ----------------------------------the basics ------------------------------------

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    fullName() {
        return this._firstName + " " + this._lastName
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}

myPerson = new Person("Dude", "Person");

// console.log(myPerson);
// console.log(myPerson.fullName());

myPerson.lastName = "People";

console.log(myPerson._lastName);
console.log(myPerson.lastName);

// ----------------------------------inheritance -------------------------------------

class ExtentedPerson extends Person {
    constructor(firstName, middleName, lastName) {
        super(firstName, lastName)
        this.middleName = middleName;
    }
    fullName() {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

myExtendedPerson = new ExtentedPerson("Dude", "is", "Person")

// console.log(myExtendedPerson);
// console.log(myExtendedPerson.fullName());
