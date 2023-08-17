import getNumberPeopleInBus from "./index";

describe("getNumberPeopleInBus()", () => {
	it('should return the number of people in the bus', function () {
		const busStops: number[][] = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
		const expectedResult: number = 17;

		const actualResult: number = getNumberPeopleInBus(busStops);

		expect(actualResult).toEqual(expectedResult)
	});

	it('should return 0 when there is no people in the bus stops', function () {
		const busStops: number[][] = [[0, 0]];
		const expectedResult: number = 0;

		const actualResult: number = getNumberPeopleInBus(busStops);

		expect(actualResult).toEqual(expectedResult);
	});
})