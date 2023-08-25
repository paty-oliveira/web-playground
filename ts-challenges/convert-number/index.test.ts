import convertNumber from "./index";

describe("convertNumber()", () => {
	it('should convert the number into letters', function () {
		const input: string = "73327673756932858080698267658369";
		const actualResult: string = convertNumber(input);
		const expectedResult: string = "I LIKE UPPERCASE";

		expect(actualResult).toEqual(expectedResult)
	});
})