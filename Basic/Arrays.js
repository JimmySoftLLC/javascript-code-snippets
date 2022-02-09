// this file has common array manipulations in javascript, used for my blog tutorials

//--------------Big O of array methods---------------------------------------------------------
//  O(1): Access, Push, Pop 
//  O(n): shift, unshift, search, concat, slice, splice, forEach, map, filter, reduce


//--------------initializing arrays with values and accessing values----------------------------

let myArray = ["dude", "person", "how", "are", "you"];
// console.log(myArray) // Array(5) ["dude", "person", "how", "are", "you"]
// console.log(myArray[0]) // dude

let myArray2 = [
    ["dude1", "person1"],
    ["dude2", "person2"],
    ["dude3", "person3"],
    ["dude4", "person4"]
];
// console.log(myArray2) // Array(4) [Array(2), Array(2), Array(2), Array(2)]
// console.log(myArray2[0]) // (2) ['dude1', 'person1']
// console.log(myArray2.length) // 4, the outer array
// console.log(myArray2[0].length) // 2, the inner array

let myArray3 = new Array(0, 1, 2, 3);  // this is a constructor
// console.log(myArray3) // Array(4) [0, 1, 2, 3]
// console.log(myArray3[3]) // 3

//-------------------------copying arrays to other arrays------------------------------

let myArray4 = JSON.parse(JSON.stringify(myArray)); //deep copy array changes to myArray4 do not effect myArray
// console.log(myArray4) // Array(5) ["dude", "person", "how", "are", "you"]

//------------------------- string operations on arrays --------------------------------

let myString = myArray.toString() //converts to a string of comma separated values
// console.log(myString) // dude,person,how,are,you

let myString2 = myArray4.join(","); // joins all elements into a string
// console.log(myString2); // dude,person,how,are,you

//---------------------adding and removing elements in an array-------------------

let myValPop = myArray.pop() // removes the last element and returns the popped out element
// console.log(myValPop) // you

let myValShift = myArray.shift() // removes first element and returns the shifted out element
// console.log(myValShift) // dude

let myValPush = myArray.push('pushedVal') //adds element to the end and returns the length
// console.log(myValPush) // 4

let myValUnshift = myArray.unshift('myUnshiftVal')  //adds element to the beginning and returns the length
// console.log(myValUnshift) // 5

let myValPushMyArray2 = myArray2[0].push('myPushVal') //adds element to the end of first inner array returns the length
// console.log(myValPushMyArray2) // 3

//-------------------removing and changing elements in an array--------------------------------------

myArray[0] = "outerElement"
// console.log(myArray)  // (5) ['outerElement', 'person', 'how', 'are', 'pushedVal']

myArray2[0][1] = "innerElement"
// console.log(myArray2[0])  // (3) ['dude1', 'innerElement', 'myPushVal']

delete myArray[0] //deletes the first element, there still is a hole in the array and set to undefined.
// console.log(myArray[0])  // undefined

myArray.splice(0, 2, 'Dudette', 'Sally') // starts at index, how many to remove, item list
// console.log(myArray)  // (5) ['Dudette', 'Sally', 'how', 'are', 'pushedVal']

myArray.splice(0, 0, 'Dudette', 'Sally') // starts at index, how many to remove, item list
// console.log(myArray)  // (7) ['Dudette', 'Sally', 'Dudette', 'Sally', 'how', 'are', 'pushedVal']

myArray.splice(0, 4) // starts at index, how many to remove, item list
// console.log(myArray)  // (3) ['how', 'are', 'pushedVal']

//---------------------merging arrays------------------------------------

let myMergeArray = myArray.concat(myArray3) //combines myArray and mArray3 return a new array note mixed types can be possible
// console.log(myMergeArray)  // (7) ['how', 'are', 'pushedVal', 0, 1, 2, 3]

let myMergeArray2 = myArray.concat(myArray3, myMergeArray) //can merge more than two arrays
// console.log(myMergeArray2)  // (14) ['how', 'are', 'pushedVal', 0, 1, 2, 3, 'how', 'are', 'pushedVal', 0, 1, 2, 3]

let myMergeArray3 = myArray.concat("value1", "value2", myArray3) //can merge mixture of types including values
// console.log(myMergeArray3)  // (9) ['how', 'are', 'pushedVal', 'value1', 'value2', 0, 1, 2, 3]

//---------------------slicing arrays------------------------------------

let mySliceArray = myArray.slice(0, 2) // copies a section of an array to another array starting at index and how many elements
// console.log(mySliceArray)(2)['how', 'are']

let mySliceArray2 = myArray.slice(0) // copies a section of an array to another array starting at index and if second parameter missing copies to the end
// console.log(mySliceArray2)  // (3) ['how', 'are', 'pushedVal']

//---------------------sorting arrays------------------------------------

let myArraySort = ["a", "c", "d", "f", "b", 1, 4, 2, 3];

myArraySort.sort() // will sort lowest to highest array alphabetically, numbers are interpreted as strings
// console.log(myArraySort)  // (9) [1, 2, 3, 4, 'a', 'b', 'c', 'd', 'f']

myArraySort.reverse() // will sort highest to lowest array alphabetically, numbers are interpreted as strings
// console.log(myArraySort)  // (9) ['f', 'd', 'c', 'b', 'a', 4, 3, 2, 1]

let myArraySortNumbers = [10, 20, 1, 5, 9, 3, "a", "b"];

myArraySortNumbers.sort((a, b) => { return a - b }) // will sort highest to lowest numerically
// console.log(myArraySortNumbers)  // (8) [1, 3, 5, 9, 10, 20, 'a', 'b']

myArraySortNumbers.reverse((a, b) => { return a - b }) // will sort lowest to highest numerically
// console.log(myArraySortNumbers)  // (8) ['b', 'a', 20, 10, 9, 5, 3, 1]

//---------------------finding min an max in an array------------------------------------
// Note you can use sort to find the MIN or MAX value by using the compare operation accessing the 
// first or last item.  But it is inefficient

let myArrayOfNumber = [1, 3, 26, 6, 7, 90, -1, -30, 5]

let myMinNumber = Math.min.apply(null, myArrayOfNumber)
// console.log(myMinNumber) // -30

let myMaxNumber = Math.max.apply(null, myArrayOfNumber)
// console.log(myMaxNumber) // 90

function myArrayMin(arr) {
    let myIndex = arr.length - 1;
    let min = Infinity;
    while (myIndex) {
        if (arr[myIndex] < min) {
            min = arr[myIndex];
        }
        myIndex--;
    }
    return min;
}
// console.log(myArrayMin(myArrayOfNumber)) // -30

function myArrayMax(arr) {
    let myIndex = arr.length - 1;
    let max = -Infinity;
    while (myIndex) {
        if (arr[myIndex] > max) {
            max = arr[myIndex];
        }
        myIndex--;
    }
    return max;
}
// console.log(myArrayMax(myArrayOfNumber)) // 90

// ---------------------------sorting object arrays-------------------------------------------

let cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

cars.sort((a, b) => { return a.year - b.year });
// console.log(cars[0]); //Object {type: "Volvo", year: 2016}
// console.log(cars[1]); //Object {type: "BMW", year: 2010}
// console.log(cars[2]); //Object {type: "Volvo", year: 2016}

cars.sort(function (a, b) {
    let aLC = a.type.toLowerCase();
    let bLC = b.type.toLowerCase();
    if (aLC < bLC) return -1;
    if (aLC > bLC) return 1;
    if (aLC = bLC) return 0;
});
// console.log(cars[0]); //Object {type: "BMW", year: 2010}
// console.log(cars[1]); //Object {type: "Saab", year: 2001}
// console.log(cars[2]); //Object {type: "Volvo", year: 2016}

// -----------------------------for each--------------------------------------------------------

let numbersForEach = [45, 4, 9, 16, 25];
numbersForEach.forEach(forEachFunction);  //calls function one for each array element

function forEachFunction(value, index, array) {
    // console.log(index, value);
}

// ---------------------------map------------------------------------------------------------

let numbersMap = [45, 4, 9, 16, 25];
let numbersMapped = numbersMap.map(mapFunction);  //creates a new array performing the function on each array element

function mapFunction(value, index, array) {  //index and array values are not needed
    return value * 2;
}
// console.log(numbersMapped); //Array(5) [90, 8, 18, 32, 50]

//-----------------------------filter---------------------------------------------------------

let numbersOver18 = [45, 4, 9, 16, 25];
let over18 = numbersOver18.filter(filterFunction); //creates a new array with array elements pass the test

function filterFunction(value, index, array) {
    return value > 18;
}
// console.log(over18);  //Array(2) [45, 25]

//------------------------------reduce----------------------------------------------------------
// runs a function on each array element to reduce it to a single value
// left-to-right in the array
// The total (the initial value or the previously returned value)
// The item value
// The item index
// The array itself
let numbersReduce = [45, 4, 9, 16, 25];
let sum = numbersReduce.reduce(reduceFunction);

function reduceFunction(total, value) {
    // console.log(total, value)
    // 45 4
    // 49 9
    // 58 16
    // 74 25
    return total + value;
}
// console.log(sum) // 99

//------------------------------searching arrays----------------------------------------------------------

let numbersToSearch = [45, 4, 9, 16, 25];

function findItem(item, numbersToSearch) {
    return numbersToSearch.indexOf(item)
};

//console.log(findItem(16, numbersToSearch)); // 3

///------------------------------reduce-----------------------------------------------

// JavaScript
function histogram(arr) {
    return arr.reduce((obj, item) => {
        obj[item] = obj[item] + 1 || 1;
        return obj;
    }, {});
}
const names = ["Jeff", "Jake", "Leonard", "Ronald", "Jake", "Jeff", "Jake", "Neptune", "Jake"];
histogram(names)
  // {
  //   Jake: 4,
  //   Jeff: 2,
  //   Leonard: 1,
  //   Neptune: 1
  //   Ronald: 1
  // }