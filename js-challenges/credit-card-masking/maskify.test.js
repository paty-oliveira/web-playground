const maskify = require('./maskify');

describe('maskify()', () => {
	it('should mask all credit card numbers except the last four', function () {
		const creditCardNumber = '4556364607935616';
		const actualResult = maskify(creditCardNumber);
		const expectedResult = '############5616';

		expect(actualResult).toEqual(expectedResult);
	});

	it('should not mask a credit card number with less than five digits', function () {
		const creditCardNumber = '1';
		const actualResult = maskify(creditCardNumber);
		const expectedResult = '1';

		expect(actualResult).toEqual(expectedResult);
	});
})