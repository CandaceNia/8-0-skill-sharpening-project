/**
 * getLengthOfString()
 * ---------------------
 * Returns the length of a string.
 * @param {string} str
 * @returns {number}
 *
 * EXAMPLE:
 *  getLengthOfString("down");
 *  //> 4
 */
function getLengthOfString(string) {

  return string.length
}

/**
 * convertToNumber()
 * ---------------------
 * Converts the inputted value into a number.
 * @param {*} val
 * @returns {number}
 *
 * EXAMPLE:
 *  convertToNumber("111");
 *  //> 111
 */
function convertToNumber(val) {
return Number(val)
}

/**
 * convertToString()
 * ---------------------
 * Converts the inputted value into a string.
 * The value is guaranteed to NOT be null or undefined.
 * @param {*} val
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToString(99);
 *  //> "99"
 */
function convertToString(val) {
return String(val)
}

/**
 * convertToShoutingText()
 * ---------------------
 * Converts the inputted text into all uppercase characters.
 * @param {string} text
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToShoutingText("Hello There");
 *  //> "HELLO THERE"
 */
function convertToShoutingText(text) {
  let message = text.toUpperCase();
return message
}

/**
 * convertToWhisperText()
 * ---------------------
 * Converts the inputted text into all lowercase characters.
 * @param {string} text
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToWhisperText("Hello There");
 *  //> "hello there"
 */
function convertToWhisperText(text) {
let message = text.toLowerCase()
return message
}

/**
 * checkIfCharacterIsInString()
 * ---------------------
 * Checks if the given `character` appears in the `text`.
 * @param {string} text
 * @param {string} character
 * @returns {boolean}
 *
 * EXAMPLE:
 *  checkIfCharacterIsInString("hello there", "e");
 *  //> true
 *
 *  checkIfCharacterIsInString("hello there", "a");
 *  //> false
 */
function checkIfCharacterIsInString(text, character) {
  let isIt = text.includes(character)
  return isIt
}

/**
 * isEven()
 * ---------------------
 * Returns `true` if the number given is even. Otherwise, returns false.
 * @param {number} num
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEven(10);
 *  //> true
 *
 *  isEven(11);
 *  //> false
 */
function isEven(num) {}

/**
 * isOdd()
 * ---------------------
 * Returns `true` if the number given is odd. Otherwise, returns `false`.
 * @param {number} num
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isOdd(10);
 *  //> false
 *
 *  isOdd(11);
 *  //> true
 */
function isOdd(num) {
  let result = ""
  if (num % 2 === 1 ){
    result = true
  }else { result = false
  }
  return result 
}

/**
 * isTruthy()
 * ---------------------
 * Returns `true` if the value given is a truthy value. Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isTruthy(10);
 *  //> true
 *
 *  isTruthy(null);
 *  //> false
 */
function isTruthy(val) {
   let result = !!val
  return result 
}

/**
 * isFalsy()
 * ---------------------
 * Returns `true` if the value given is a falsy value. Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isFalsy(undefined);
 *  //> true
 *
 *  isFalsy(" ");
 *  //> false
 */
function isFalsy(val) {
   result = !val
  return result
}

// Do not change the code below.
module.exports = {
  getLengthOfString,
  convertToNumber,
  convertToString,
  convertToShoutingText,
  convertToWhisperText,
  checkIfCharacterIsInString,
  isEven,
  isOdd,
  isTruthy,
  isFalsy,
};
