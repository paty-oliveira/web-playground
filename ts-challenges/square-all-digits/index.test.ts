import squareAllDigits from "./index";

describe("squareAllDigits()", () => {
	it('should square all digits', function () {
		const number: Number = 9119;
		const expectedResult: Number = 811181;
		const actualResult: Number = squareAllDigits(number);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should not square noting when the input is zero', function () {
		const number: Number = 0;
		const expectedResult: Number = 0;
		const actualResult: Number = squareAllDigits(number);

		expect(actualResult).toEqual(expectedResult);
	});
})