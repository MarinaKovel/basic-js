const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let len = matrix.length;
  let lenEl = matrix[0].length;
    for (let i = 0; i < len; i++) {
        for (let j=0; j < lenEl; j++) {
            if ((matrix[i][j] == 0) && (typeof matrix[i + 1] !== 'undefined')) { 
              matrix[i+1][j] = 0 
            };
        }
    }
  let result = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? result(num) : num * 1),
        0
    );
    return result(matrix);
}

module.exports = {
  getMatrixElementsSum
};
