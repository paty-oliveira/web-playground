const positiveSum = require('./positiveSum');

describe('positiveSum()', () => {

	it('should return 0 when the input array is empty', function () {
		const inputArray = [-1,2,3,4,-5];
		const expectedSum = 9;
		const actualSum = positiveSum(inputArray);

		expect(actualSum).toEqual(expectedSum)
	});

	it('should sum all the positive values', function () {
		const inputArray = [];
		const expectedSum = 0;
		const actualSum = positiveSum(inputArray);

		expect(actualSum).toEqual(expectedSum);
	});

	it('should return 0 when all the element are less than 0', function () {
		const inputArray = [-1,-2,-3,-4,-5];
		const expectedSum = 0;
		const actualSum = positiveSum(inputArray);

		expect(actualSum).toEqual(expectedSum);
	});
})