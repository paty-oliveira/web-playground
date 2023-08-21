import dropCap from "./index";


describe("dropCap()", () => {
	it('should capitalize all words with more than 2 letters', function () {
		const phrase: string = "more  than    one space between words";
		const expectedResult: string = "More  Than    One Space Between Words";
		const actualResult: string = dropCap(phrase);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should not capitalize words with 2 letters or less', function () {
		const phrase: string = "of th o p    "
		const expectedResult: string = "of th o p    ";
		const actualResult: string = dropCap(phrase);

		expect(actualResult).toEqual(expectedResult);
	});
})