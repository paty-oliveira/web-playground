const reverseArray = require("./reverseArray");

describe("reverseArray function", () => {
	it('should reverse an array with a length equal to the provided input', function () {
		const arrayLength = 10;
		const actualResult = reverseArray(arrayLength);
		const expectedResult = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

		expect(actualResult).toEqual(expectedResult)
	});
})