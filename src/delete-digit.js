const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const srtingNumber = n.toString();
  let result = 0; 
  for(let i = 0; i < srtingNumber.length; i += 1) {
    const currentValue = srtingNumber.slice(0, i) + srtingNumber.slice(i + 1);
    if(currentValue > result) {
      result = currentValue;
    }
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
