import getVowelCount from "./index";

describe("getVowelCount()", () => {

	it('should return 5 vowels', function () {

		const letters: string = "abracadabra";
		const expectedResult: number = 5;
		const actualResult: number = getVowelCount(letters);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should return 0 vowels', function () {

		const letters: string = "ppllkkmmqwwqw";
		const expectedResult: number = 0;
		const actualResult: number = getVowelCount(letters);

		expect(actualResult).toEqual(expectedResult);
	});
})