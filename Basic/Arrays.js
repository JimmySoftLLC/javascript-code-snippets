// this file has common array manipulations in javascript, used for my blog tutorials

//--------------Big O of array methods---------------------------------------------------------

//  Access O(1)
//  Push/Pop O(1)
//  Remove or insert at the beginning O(n)
//  Search O(n)
//  Shift/Unshift O(n)
//  Concat O(n)
//  Slice O(n)
//  Splice O(n)
//  Sort O(n)
//  forEach O(n)
//  map O(n)
//  filter O(n)
//  reduce O(n)


//--------------initializing arrays with values and accessing values----------------------------

let myArray = ["dude", "person", "how", "are", "you"];
// console.log(myArray) // Array(5) ["dude", "person", "how", "are", "you"]

let myArray2 = [
    ["dude1", "person1"],
    ["dude2", "person2"],
    ["dude3", "person3"],
    ["dude4", "person4"]
];
// console.log(myArray2) // Array(4) [Array(2), Array(2), Array(2), Array(2)]

let myArray3 = new Array(0, 1, 2, 3);  // do not use this use myArray3 = [0, 1, 2, 3] instead
// console.log(myArray3) // Array(4) [0, 1, 2, 3]

let myArrayVal = myArray[0];
// console.log(myArrayVal) // dude

let myArrayVal2 = myArray2[0][1];
// console.log(myArrayVal2) //person1

let lengthOuterArray = myArray2.length;
// console.log(lengthOuterArray) //person1

let lengthInnerArray = myArray2[0].length;
// console.log(lengthInnerArray) //person1

//-------------------------copying arrays to other arrays------------------------------

let myArray4 = JSON.parse(JSON.stringify(myArray)); //deep copy array changes to myArray4 do not effect myArray
// console.log(myArray4) // Array(5) ["dude", "person", "how", "are", "you"]

//------------------------- string operations on arrays --------------------------------

let myString = myArray.toString() //converts to a string of command seperated values
// console.log(myString) // dude,person,how,are,you

let myString2 = myArray4.join(","); // joins all elements into a sring
// console.log(myString2); // dude,person,how,are,you

//---------------------adding and removing elements in an array-------------------

myArray.pop() //removes last element
let myValPop = myArray.pop() // returns the popped out element
// console.log(myValPop) // are

myArray.shift() //removes first element
let myValShift = myArray.shift() // returns the shifted out element
// console.log(myValShift) // person

myArray.push('myVal') //adds element to the end
let myValPush = myArray.push('myPushVal') //returns the count
// console.log(myValPush) // 3

myArray.unshift('myVal') //adds element to the beginnng
let myValUnshift = myArray.unshift('myUnshiftVal')  //returns the count
// console.log(myValUnshift) // 5

myArray2[0].push('myVal') //adds element to the end of first inner array
let myValPushMyArray2 = myArray2[0].push('myPushVal') //returns the count
// console.log(myValPushMyArray2, myArray2) // 4, Array(4) [Array(4), Array(2), Array(2), Array(2)]

//-------------------removing and changing elemets in an array--------------------------------------

myArray[0] = "myFirstElement"
// console.log(myArray)  //Array(5) ["myFirstElement", "myVal", "how", "myVal", "myPushVal"]

myArray2[0][1] = "mySecondElementInFirstSubArray"
// console.log(myArray2[0])  //Array(4) ["dude1", "mySecondElementInFirstSubArray", "myVal", "myPushVal"]

delete myArray[0] //deletes the first element, there still is a hole in the array and set to undefined.
// console.log(myArray)  //Array(5) […, "myVal", "how", "myVal", "myPushVal"]
// console.log(myArray[0])  //undefined

myArray.splice(0, 2, 'Dudette', 'Sally') // starts at index, how many to remove, item list
// console.log(myArray)  //Array(5) ["Dudette", "Sally", "how", "myVal", "myPushVal"]

myArray.splice(0, 0, 'Dudette', 'Sally') // starts at index, how many to remove, item list
// console.log(myArray)  //Array(7) ["Dudette", "Sally", "Dudette", "Sally", "how", "myVal", "myPushVal"]

myArray.splice(0, 4) // starts at index, how many to remove, item list
//console.log(myArray)  //Array(3) ["how", "myVal", "myPushVal"]

//---------------------merging arrays------------------------------------

let myMergeArray = myArray.concat(myArray3) //combines myArray and mArray3 return a new arry note mixed types can be possible
// console.log(myMergeArray)  //Array(7) ["how", "myVal", "myPushVal", 0, 1, 2, 3]

let myMergeArray2 = myArray.concat(myArray3, myMergeArray) //can merge more than two arrays
// console.log(myMergeArray2)  //Array(14) ["how", "myVal", "myPushVal", 0, 1, 2, 3, "how", …]

let myMergeArray3 = myArray.concat("value1", "value2", myArray3) //can merge mixture of types including values
// console.log(myMergeArray3)  //["how", "myVal", "myPushVal", "value1", "value2", 0, 1, 2, …]

//---------------------slicing arrays------------------------------------

let mySliceArray = myArray.slice(0, 2) // copies a section of an array to another array starting at index and how many elements
// console.log(mySliceArray)  // Array(3) ["how", "myVal"]

let mySliceArray2 = myArray.slice(0) // copies a section of an array to another array starting at index and if second parameter missing copies to the end
// console.log(mySliceArray2)  // Array(3) ["how", "myVal", "myPushVal"]

//---------------------sorting arrays------------------------------------

let myArraySort = ["a", "c", "d", "f", "b", 1, 4, 2, 3];

myArraySort.sort() // will sort lowest to highest array alphabetically, not numbers are interpreted as strings
// console.log(myArraySort)  // Array(9) [1, 2, 3, 4, "a", "b", "c", "d", …]

myArraySort.reverse() // will sort highest to lowest array alphabetically, not numbers are interpreted as strings
// console.log(myArraySort)  // Array(9) [1, 2, 3, 4, "a", "b", "c", "d", …]

let myArraySortNumbers = [10, 20, 1, 5, 9, 3, "a", "b"];

myArraySortNumbers.sort(function (a, b) { return a - b }) // will sort highest to lowest numerically
// console.log(myArraySortNumbers)  // Array(8) [1, 3, 5, 9, 10, 20, "a", "b"]  note 

myArraySortNumbers.reverse(function (a, b) { return a - b }) // will sort lowest to highest numerically
// console.log(myArraySortNumbers)  // Array(8) ["b", "a", 20, 10, 9, 5, 3, 1]

//---------------------finding min an max in an array------------------------------------
// Note you can use sort to find the MIN or MAX value by using the compare operation accessing the 
// first or last item.  But it is inefficient

let myArrayOfNumber = [1, 3, 26, 6, 7, 90, -1, -30, 5]

let myMinNumber = Math.min.apply(null, myArrayOfNumber)
// console.log(myMinNumber) //-30

let myMaxNumber = Math.max.apply(null, myArrayOfNumber)
// console.log(myMaxNumber) //90

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
// console.log(myArrayMin(myArrayOfNumber))

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
// console.log(myArrayMax(myArrayOfNumber))

// ---------------------------sorting object arrays-------------------------------------------

let cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

cars.sort(function (a, b) { return a.year - b.year });
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
// runs a function on each array element to produce (reduce it to) a single value
// left-to-right in the array
// The total (the initial value or the previously returned value)
// The item value
// The item index
// The array itself
let numbersReduce = [45, 4, 9, 16, 25];
let sum = numbersReduce.reduce(reduceFunction);

function reduceFunction(total, value, index, array) {
    // console.log(total, value)
    // 45 4
    // 49 9
    // 58 16
    // 74 25
    return total + value;
}
// console.log(sum) //99

//------------------------------searching arrays----------------------------------------------------------

let numbersToSearch = [45, 4, 9, 16, 25];

function findItem(item, numbersToSearch) {
    return numbersToSearch.indexOf(item)
};

console.log(findItem(16, numbersToSearch)); // 3

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