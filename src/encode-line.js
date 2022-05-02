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
  let count = 1;
  let result = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count = count + 1;
    } else {
      result = result + count;
      result = result + str[i];
      count = 1;
    }
  }
  result = result.replace(/[1]/g, '');
  return result;
}

module.exports = {
  encodeLine
};
