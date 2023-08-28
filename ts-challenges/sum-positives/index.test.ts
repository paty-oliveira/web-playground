import sumTwoSmallestNumbers from "./index";

describe("sumTwoSmallestNumbers", () => {
	it('should return the sum of the lowest positive numbers', function () {
		const numbers: number[] = [23, 71, 33, 82, 1];
		const actualResult: number = sumTwoSmallestNumbers(numbers);
		const expectedResult: number = 24;

		expect(actualResult).toEqual(expectedResult)
	});
})