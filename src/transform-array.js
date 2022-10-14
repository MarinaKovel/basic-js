const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];

  if (Array.isArray(arr) === true) {

    for (let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
          case '--discard-next':
            if (i <= arr.length - 2) {
              result = arr.splice(i, 2);} else { result = arr.splice(i, 1)}
            
            break;
          case '--discard-prev':
            if (i !== 0) {result = arr.splice(i - 1, 2);} else { result = arr.splice(i, 1)}
            break;
          case '--double-next':
          alert(i)
            if (i <= arr.length - 2) {result = arr.splice(i, 1, i + 1);} else { result = arr.splice(0, arr.length - 1)}
            break;
          case '--double-prev':
            if (i !== 0) {result = arr.splice(i, 1, i);} else { result = arr.splice(i, 1)}
            break;
          default:
            result = arr;
      }
    }
    for (i = 0; i < result.length; i++) {
      if (result[i] === '--discard-next' || result[i] === '--discard-prev' || result[i] === '--double-next' || result[i] ===  '--double-prev') { result.splice(i,1)}
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  return result;
}

module.exports = {
  transform
};
