const unusedDigits = require('./unusedDigits');

describe("unusedDigits function", () => {
	it("When the input is empty it should return all digits", function () {
		const inputDigits = [];
		const actualResult = unusedDigits(inputDigits);
		const expectedResult = "0123456789";

		expect(actualResult).toEqual(expectedResult);
	});

	it("When the input contains all the digits sorted, it should return an empty result", () => {
		const inputDigits = [0, 1, 2, 34, 5, 6, 78, 9];
		const actualResult = unusedDigits(inputDigits);
		const expectedResult = "";

		expect(actualResult).toEqual(expectedResult);
	});

	it("When the input contains all the digits unsorted, it should return an empty return", () => {
		const inputDigits = [0, 1, 52, 4, 3, 6, 7, 9, 8];
		const actualResult = unusedDigits(inputDigits);
		const expectedResult = "";

		expect(actualResult).toEqual(expectedResult)
	})

	it("When the input does not contain all the digits, it should return the missing ones", () => {
		const inputDigits = [2015, 8, 26];
		const actualResult= unusedDigits(inputDigits);
		const expectedResult = "3479";

		expect(actualResult).toEqual(expectedResult)
	})
})
