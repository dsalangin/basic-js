const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const letterCount = {
    letter: '',
    count: '',
  }

  for (let i = 0; i <= str.length; i++) {
    if(str[i] !== letterCount.letter) {
      const encoding = letterCount.count === 1 ?
        letterCount.letter :
        letterCount.count + letterCount.letter;
      result += encoding;
      letterCount.letter = str[i];
      letterCount.count = 1;
    } else {
      letterCount.count += 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
