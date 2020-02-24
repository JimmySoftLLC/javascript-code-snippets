
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