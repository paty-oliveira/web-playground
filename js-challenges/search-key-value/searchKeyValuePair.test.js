const getCharacters = require('./searchKeyValuePair');
const {act} = require("react-dom/test-utils");

describe("getCharacters function", () => {
	test("it should return an empty array when the key is not available", () => {
		const characters = {"characters": [
			{"name": "Bill Cipher", "age":"Unknown", "speciality":"warp reality"}]
		};

		const key = "city";
		const value = "Porto";

		const actualResult = getCharacters(characters, key, value);
		const expectedResult = [];

		expect(actualResult).toEqual(expectedResult);
	})

	test("it should return an empty array when the value is not matching", () => {
		const characters = {"characters": [
				{"name": "Bill Cipher", "age":"Unknown", "speciality":"warp reality"}]
		};

		const key = "name";
		const value = "Patricia";

		const actualResult = getCharacters(characters, key, value);
		const expectedResult = [];

		expect(actualResult).toEqual(expectedResult);
	})

	test("it should return all information from Bill Cipher", () => {
		const characters = {"characters": [
				{"name": "Bill Cipher", "age":"Unknown", "speciality":"warp reality"}]
		};

		const key = "name";
		const value = "Bill Cipher";

		const actualResult = getCharacters(characters, key, value);
		const expectedResult = [{"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"}];

		expect(actualResult).toEqual(expectedResult);
	})

	test("it should return all information from Bill Cipher when there is no 100% of name matching", () => {
		const characters = {"characters": [
				{"name": "Bill Cipher", "age":"Unknown", "speciality":"warp reality"}]
		};

		const key = "name";
		const value = "Bill";

		const actualResult = getCharacters(characters, key, value);
		const expectedResult = [{"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"}];

		expect(actualResult).toEqual(expectedResult);
	});

	test("it should be case sensitive when the it's doing the matching", () => {
		const characters = {"characters": [
				{"name": "Bill Cipher", "age":"Unknown", "speciality":"warp reality"}]
		};

		const key = "name";
		const value = "bill";

		const actualResult = getCharacters(characters, key, value);
		const expectedResult = [{"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"}];

		expect(actualResult).toEqual(expectedResult);
	})
})