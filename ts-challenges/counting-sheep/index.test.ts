import countingSheep from "./index";

describe("countingSheep()", () => {
	it('should count the total of 17 sheep.', function () {
		const sheep: boolean[] =  [true,  true,  true,  false,
			true,  true,  true,  true ,
			true,  false, true,  false,
			true,  false, false, true ,
			true,  true,  true,  true ,
			false, false, true,  true ]

		const expectedResult: number = 17;
		const actualResult: number = countingSheep(sheep);

		expect(actualResult).toEqual(expectedResult);
	});
})