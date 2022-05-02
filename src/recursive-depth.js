const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
	calculateDepth(arr) {
		let count1 = 1;
		let count2 = 1;
		arr.forEach(n => {
			if (Array.isArray(n)) {
				count2 = this.calculateDepth(n) + 1;
				if (count2 > count1) count1 = count2;
			}
		});
		return count;
	}
}
module.exports = {
  DepthCalculator
};
