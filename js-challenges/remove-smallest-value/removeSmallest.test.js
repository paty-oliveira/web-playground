const removeSmallest = require('./removeSmallest');

describe('removeSmallest()', () => {
	it('should remove the smallest number from the array', function () {
		const numbers = [5, 3, 2, 1, 4];
		const actualResult = removeSmallest(numbers);
		const expectedResult = [5, 3, 2, 4];

		expect(actualResult).toEqual(expectedResult)
	});
})