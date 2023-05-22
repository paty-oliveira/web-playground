const removeConsecutiveDuplicates = require('./removeConsecutiveDuplicates');

describe('removeConsecutiveDuplicates()', () => {
	it('should return empty result when the statement is empty', function () {
		const inputStatement = '';
		const expectedResult = '';
		const actualResult = removeConsecutiveDuplicates(inputStatement);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should remove consecutive words in a statement', function () {
		const inputStatement = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
		const expectedResult = 'alpha beta gamma delta alpha beta gamma delta';
		const actualResult = removeConsecutiveDuplicates(inputStatement);

		expect(actualResult).toEqual(expectedResult);
	});
})

