//-----------------------------simple recursion-----------------------------------------------

function simpleExample(num) {
    if (num <= 0) { //base case
        console.log("All done!");
        return; //this ends the recursion
    }
    console.log(num);
    num--;

    simpleExample(num); //recursive call
}

// console.log(simpleExample(3))

//-------------------------------helpler recursion--------------------------------------------

function helperMethodReturnOdd(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {  //base case
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) //recursive call
    }

    helper(arr)

    return result;
}

// console.log(helperMethodReturnOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//-------------------------------reverse string-------------------------------------------------

const reverseString = (str) => {
    console.log(str)
    return str ? reverseString(str.substr(1)) + str[0] : str;
};

console.log(reverseString('hello world!'));