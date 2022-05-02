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
  str = n.toString();
  result = '';
 for (i = 0; i < str.length; i++){
   comparison = str.replace(str[i], '');
   if (i === 0) {
     result = comparison.toString();
   } else if (i > 0 && str[i] < (str[i - 1]) && comparison > result) {
     result = comparison.toString();
   }
 }
 return +result;
}

module.exports = {
  deleteDigit
};
