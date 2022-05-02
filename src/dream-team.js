const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  str = '';
  if (typeof members === 'object' && members !== null) {
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let a = members[i].trim();
      str = str + a[0];
    } 
  }
  str = str.toUpperCase();
  str = Array.from(str);
  str = str.sort().toString().split(',').join('');
  if (str === '') {
    str = Boolean(0);
  }
    } else {
    str = Boolean(0);
    }
  console.log(typeof str);
  return str;
}

module.exports = {
  createDreamTeam
};
