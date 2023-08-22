import findShort from "./index";

describe("findShort()", () => {
	it('should return the length of the shortest word(s)', function () {
		const words: string = "bitcoin take over the world maybe who knows perhaps";
		const expectedResult: number = 3;

		const actualResult: number = findShort(words);

		expect(actualResult).toEqual(expectedResult);
	});
})