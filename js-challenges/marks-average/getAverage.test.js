const getAverage = require('./getAverage');

describe('getAverage()', () => {
	it('should calculate the marks average', function () {
		const marks = [1,2,3,4,5,];
		const actualResult = getAverage(marks);
		const expectedResult = 3;

		expect(actualResult).toBe(expectedResult)
	});
})