// Spread ... syntax allows an array or string to be
// expanded in places where zero or more arguments (for function calls) or 
// elements (for array literals) are expected

// ------------------- for function calls --------------------------------

const numbers = [1, 2, 3, 4, 5]

// console.log(Math.min(1, 2, 3, 4, 5))
// console.log(Math.min(...numbers));

const dudePersonString = ["hi", "dude", "person", "how", "are", "you"]

// console.log(...dudePersonString)

// console.log(..."SEPERATE LETTERS") // String is an iterable

// ------------------- in array literals ----------------------------------

const myFirstArray = [0, 2, 1, 5, 6]
const mySecondArray = [0, 2, 1, 5, 6]

// console.log(...myFirstArray, ...mySecondArray)

const myNewArray = [...myFirstArray, 1000, ...mySecondArray]

// console.log(myNewArray);

// ---------------------- to copy arrays  -----------------------------------

const myThirdArray = [...myFirstArray]  // only single layer copy

// console.log(myThirdArray)

// ------------------------ for object literals  ----------------------------

const myObject = { firstName: "Dude", lastName: "Person" }
const myObject2 = { address: "Coolville" }

const fullData = { ...myObject, ...myObject2, myBoolean: true }; // you can add elements in any order
const fullDataMutated = { ...fullData, myBoolean: false }; // you can mutate a single element too after the spread

// console.log(fullData);
// console.log(fullDataMutated);

// --------------------------- how to use in frameworks like react ---------------------------

const toDos = [
    { user: "Dude1", task: "Say hi", completed: true },
    { user: "Dude2", task: "Say bye", completed: false }
]

function addToDo(newToDo) {
    return [...toDos, { ...newToDo, completed: false }]
}

const myNewToDos = addToDo({ user: "Dude3", task: "Eat tacos" })

console.log(myNewToDos);