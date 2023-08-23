import findCapitals from "./index";

describe( "findCapitals()", () => {
	it('should return an array with indexes of all upper case letters', function () {
		const word: string = "CodEWaRs";
		const expectedResult = [0,3,4,6];

		const actualResult = findCapitals(word);

		expect(actualResult).toEqual(expectedResult);
	});
})