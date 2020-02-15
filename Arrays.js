let myArray = ["dude", "person", "how", "are", "you"];

let myArray2 = [
    ["dude1", "person1"],
    ["dude2", "person2"],
    ["dude3", "person3"],
    ["dude4", "person4"]
];

let myArray3 = new Array(0, 1, 2, 3);

let myArrayVal = myArray[0];
let myArrayVal2 = myArray2[0][0];
// console.log(myArray2[0][1]) //person1

let myArray4 = JSON.parse(JSON.stringify(myArray));  //deep copy array

let myString = myArray.join(","); // joins all elements into a sring
// console.log(myString); //results in 0,1,2,3

myArray.pop() //removes last element
let myValPop = myArray.pop() // returns the popped out element
// console.log(myValPop)
myArray.shift() //removes first element
let myValShift = myArray.shift() // returns the shifted out element
// console.log(myValShift)

myArray.push('myVal') //adds element to the end
let myValPush = myArray.push('myPushVal') //returns the count
// console.log(myValPush, myArray)
myArray.unshift('myVal') //adds element to the beginnng
let myValUnshift = myArray.unshift('myUnshiftVal')  //returns the count
// console.log(myValUnshift, myArray)