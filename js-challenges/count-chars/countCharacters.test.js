const countCharacters = require('./countCharacters');

describe("countCharacters function", () => {
	it('When the string input is empty it should return an empty object', () => {
		const inputString = "";
		const actualResult = countCharacters(inputString);
		const expectedResult = {};

		expect(actualResult).toEqual(expectedResult);
	})

	it('When the string input is not empty it should return all the occurrences', () => {
		const inputString = "ABC";
		const actualResult = countCharacters(inputString);
		const expectedResult = {'A': 1, 'B': 1, 'C': 1};

		expect(actualResult).toEqual(expectedResult)
	})

})