const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.toString().split('-');

  if(arr.length !== 6) {
    return false;
  }

  for (let i = 0; i <= arr.length - 1; i += 1) {
    const str = arr[i];

    if(str.length !== 2) {
      return false;
    }

    for(let j = 0; j <= 1; j += 1) {
      
      if(!(str[j] >= 'A' && str[j] <= 'F' || str[j] >= '0' && str[j] <= '9')) {
        return false;
      }
    }
  };

  return true;
}
module.exports = {
  isMAC48Address
};

// throw new NotImplementedError('Not implemented');
// // remove line with error and write your code here