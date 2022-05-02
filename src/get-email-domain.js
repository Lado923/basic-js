const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function encodeLine(str) {
  let newStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    }else{
      if (count > 1) {
        newStr += count + str[i];
      } else {
        newStr += str[i];
      }
      count = 1;
    }
  }
  return newStr;
}

module.exports = {
  getEmailDomain
};
