const removeElements = require('./removeElements');

describe('removeElements()', () => {
	it('should remove the provided elements from the main list', function () {
		const inputArray = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3];
		const toBeRemoved = [2, 4, 3];
		const actualResult = removeElements(inputArray, toBeRemoved);
		const expectedResult = [8, 7, 6, 5, 1];

		expect(actualResult).toEqual(expectedResult);
	});

	it('should return an empty list when the input array is empty', function () {
		const inputArray = [];
		const toBeRemoved = [1, 9];
		const actualResult = removeElements(inputArray, toBeRemoved);
		const expectedResult = [];

		expect(actualResult).toEqual(expectedResult);
	});

	it('should return an empty list when the elements to be removed are all in the input array', function () {
		const inputArray =  [4, 4, 2 , 3]
		const toBeRemoved =  [2, 2, 4, 3]
		const actualResult = removeElements(inputArray, toBeRemoved);
		const expectedResult = [];

		expect(actualResult).toEqual(expectedResult)
	});
})