import multiplesNumber from "./index";

describe("multuplesNumber()", ()=> {

	it('should return multiples of 5 until 25', function () {
		const number: number = 5;
		const limit: number = 25;
		const expectedResult: number[] = [5, 10, 15, 20, 25];
		const actualResult: number[] = multiplesNumber(number, limit);

		expect(actualResult).toEqual(expectedResult)
	});

	it('should return multiples of 4 until 27', function () {
		const number: number = 4;
		const limit: number = 27;
		const expectedResult: number[] = [4, 8, 12, 16, 20, 24];
		const actualResult: number[] = multiplesNumber(number, limit);

		expect(actualResult).toEqual(expectedResult);
	});
})