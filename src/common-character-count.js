const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  const arrayFirst = Array.from(s1).sort();
  const arraySecond = Array.from(s2).sort();
  const maxLength = Math.max(arrayFirst.length, arraySecond.length);
  let count = 0;

  for (let i = 0; i < maxLength; i++) {
     if (arrayFirst[i] === arraySecond[i] || arrayFirst[i + 1] === arraySecond[i]) {
        count++;
     }
  }

  return count;
}


module.exports = {
  getCommonCharacterCount
};
