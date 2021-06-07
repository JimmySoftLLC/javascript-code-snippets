
// -------------------------backslash character----------------------------------------------------

let backslashString1 = "\'"	       //  '	Single quote
let backslashString2 = "\"" 	   //  "	Double quote
let backslashString3 = "\\"	       //  \	Backslash
let backslashString4 = `"Dude"\'`  // ` lets you build really complicated strings my favorite!
let backslashString5 = "\b"        //	    Backspace
let backslashString6 = "\f"        //		Form Feed
let backslashString7 = "\n"        //		New Line
let backslashString8 = "\r"        //		Carriage Return
let backslashString9 = "\t"        //		Horizontal Tabulator
let backslashString10 = "\v"       //		Vertical Tabulator

let backslashString11 = "Dude this is a really long string" +
    "you can continue with the +"       //     do not use backslash not all browser support it

// console.log(backslashString1);
// console.log(backslashString2);
// console.log(backslashString3);
// console.log(backslashString11);

//----------------------------string searches---------------------------------------------------

let myString = "Testing string stuff my stuff";
let myLength = myString.length;

let position = myString.indexOf("stuff", 0);  //  will return -1 if not found
let lastPosition = myString.lastIndexOf("stuff", myLength - 1);  //  will return -1 if not found

var positionSearch = myString.search("stuff");  // can take regular expressions will return -1 if not found

// console.log(myString, myLength, position, lastPosition, positionSearch);

//----------------------------string extracting---------------------------------------------------

let mySlice = myString.slice(0, 7);  //copies portion does not remove
let mySliceToEnd = myString.slice(0);  //copies to the end
let mySliceFromEnd = myString.slice(-5, 0);  //negative values copies from the end

let mySubString = myString.substring(0, 7);  // cannot except negative values

let mySubStr = myString.substr(8, 6); // second parameter specifies the length not the position

// console.log(mySlice, mySubString, mySubStr, mySliceToEnd, mySliceFromEnd);

//----------------------------String replacing--------------------------------------------------
//Note: strings are immutable you must set them to another string to change them.


let myNewString = myString.replace("string", "new string");

let myNewString2 = myString.replace(/Testing/i, "Testings"); // /xxxx/i  makes it case insensitive

let myNewString3 = myString.replace(/stuff/g, "Dudette"); // /xxxx/g  global replace

// console.log(myNewString)
// console.log(myNewString2)
// console.log(myNewString3)

//----------------------------String casing--------------------------------------------------

let myCasingString = "Dude this is so interesting";

let myCasingStringUpperCase = myCasingString.toUpperCase();
let myCasingStringLowerCase = myCasingStringUpperCase.toLowerCase();

// console.log(myCasingStringUpperCase);
// console.log(myCasingStringLowerCase);

//----------------------------String concating--------------------------------------------------

let myConcatString = "Hello"

let myConcatString2 = myConcatString + " " + "dude person";
let myConcatString3 = myConcatString.concat(" ", "dude people");

let myCharArray = ["Dude", " ", "you", " ", "are", " ", "so", " ", "cool"];

let myCharSentance = "".concat(myCharArray)  // but commas are still present
let myCharSentanceToMethod = myCharArray.toString() // but commas are still present

let myCharSentanceToMethodRemoveCommas = myString.replace(/,/g, myCharSentanceToMethod); // /xxxx/g  global replace

// console.log(myConcatString2);
// console.log(myConcatString3);
// console.log(myCharSentance);
// console.log(myCharSentanceToMethod);
// console.log(myCharSentanceToMethodRemoveCommas);

//----------------------------Extracting char and using chars--------------------------------------------------

let myExtractString = "Dude Person";
let myExtractStringChar = myExtractString.charAt(0);
let myCharCode = myExtractString.charCodeAt(0)
let myACSIIChar = String.fromCharCode(myCharCode)

// console.log(myExtractStringChar);
// console.log(myCharCode);
// console.log(myACSIIChar);

//----------------------------Splitting into Arrays--------------------------------------------------

let myStringToSplit = "Dude Person is so cool";

let myStringArray = myStringToSplit.split(" ");

//console.log(myStringArray);

//-----------------------------regular expressions ------------------------------------

// /pattern/modifiers;

// Regular Expression Patterns
// Expression	Description
// [abc]	    Find any of the characters between the brackets	
// [0-9]	    Find any of the digits between the brackets	
// (x|y)	    Find any of the alternatives separated with |

// Modifier	    Description
// i	        Perform case-insensitive matching	
// g	        Perform a global match (find all matches rather than stopping after the first match)	
// m	        Perform multiline matching

// Metacharacter	Description
// \d	            Find a digit	
// \s	            Find a whitespace character	
// \b	            Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx

// Quantifier	Description
// n+	        Matches any string that contains at least one n
// n*	        Matches any string that contains zero or more occurrences of n
// n?	        Matches any string that contains zero or one occurrences of n

// returns and array of values, returns null if there is no match

let myRegularExpressionString = "Dude this is regular expression"
let myRegularExpressionDigits = "123456789"

let myPattern = /[e ]/g
let myPatternDigits = /[1-3]/g
let myPatternAlternatives = /(is|expression)/g

let myArray = myRegularExpressionString.match(myPattern);
let myArrayDigits = myRegularExpressionDigits.match(myPatternDigits);
let myArrayAlternatives = myRegularExpressionString.match(myPatternAlternatives);

// console.log(myArray);
// console.log(myArrayDigits);
// console.log(myArrayAlternatives);

let findMetaCharacters = "Dude 0 is about to be dude 10!"

let myPatternMetaDigits = /\d/g
let myPatternMetaSpace = /\s/g
let myPatternBeginningWord = /\babo/g
let myPatternEndWord = /out\b/g
let myPatternHex = /u0068/g

let myArrayMetaDigits = findMetaCharacters.match(myPatternMetaDigits);
let myArrayMetaSpace = findMetaCharacters.match(myPatternMetaSpace);
let myArrayMetaBeginningWord = findMetaCharacters.match(myPatternBeginningWord);
let myArrayMetaEndWord = findMetaCharacters.match(myPatternEndWord);
let myArrayMetaHex = findMetaCharacters.match(myPatternHex);

// console.log(myArrayMetaDigits);
// console.log(myArrayMetaSpace);
// console.log(myArrayMetaBeginningWord);
// console.log(myArrayMetaEndWord);
// console.log(myArrayMetaHex);

let myQuantifiers = "Hello dude, hello dude person, hello dudette"

let myPatternQuantifierPlus = /du+/g
let myPatternQuantifierStar = /du*/g
let myPatternQuantifierQuestion = /du?/g

let myArrayQuantifierPlus = myQuantifiers.match(myPatternQuantifierPlus);
let myArrayQuantifierStar = myQuantifiers.match(myPatternQuantifierStar);
let myArrayMetaQuantifierQuestion = myQuantifiers.match(myPatternQuantifierQuestion);

// console.log(myArrayQuantifierPlus);
// console.log(myArrayQuantifierStar);
// console.log(myArrayMetaQuantifierQuestion);

//-----------------------------regular object ------------------------------------

let regExpObjectString = "Dude these regular expression dude are interesting dude"
let regExpObjectPattern = /dude/;

let regExpBoolean = regExpObjectPattern.test(regExpObjectString)
let regExpObject = regExpObjectPattern.exec(regExpObjectString)

console.log(regExpBoolean); // returns true of false
console.log(regExpObject.length, regExpObject[0], regExpObject.index); // returns the search text array 1 element
