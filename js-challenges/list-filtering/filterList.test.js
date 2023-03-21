const filterList = require('./filterList');

describe("filterList function", () => {
	it('should filter out strings', function () {
		const inputList = ['a', '1', 1];
		const actualResult = filterList(inputList);
		const expectedResult = [1];

		expect(actualResult).toEqual(expectedResult);
	});
})