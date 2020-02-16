// Write a function called same, which accepts two arrays
// The function should return true if every value in the array
// has a it's value squared in the second array.  The frequencies
// values must be the same.

let arr1 = [1, 2, 3, 2]
let arr2 = [9, 1, 4, 4]

// time complexity O(n^2)
// space complexity O(n)
function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) { //
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        // console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// console.log(sameNaive(arr1, arr2))

// time complexity O(n)
// space complexity O(n)
function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

// console.log(sameRefactored(arr1, arr2))

function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    const lettersExist = {};

    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];
        // if letter exists in, increment, otherwise set to 1
        lettersExist[letter] ? lettersExist[letter] += 1 : lettersExist[letter] = 1;
    }
    // console.log(lettersExist)

    for (let i = 0; i < string2.length; i++) {
        let letter = string2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lettersExist[letter]) {
            return false;
        } else {
            lettersExist[letter]--;
        }
    }
    return true;
}

console.log(validAnagram('anagrams', 'nagaramm')) //false
console.log(validAnagram('anagrams', 'gramsana')) //true