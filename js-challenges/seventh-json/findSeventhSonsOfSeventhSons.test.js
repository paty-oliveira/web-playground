const findSeventhSonsOfSeventhSons = require('./findSeventhSonsOfSeventhSons');
const {act} = require("react-dom/test-utils");

describe("findSeventhSonsOfSeventhSons function", () => {
	test("Seventh son does not exist", () => {
		const seventhSonOfSeventhSon = {name: 'A', gender: 'male', children: []};

		const actualResult = findSeventhSonsOfSeventhSons(seventhSonOfSeventhSon);
		expect(actualResult).toEqual(new Set());
	});

	test("Seventh son does not have children", () => {
		const seventhSonOfSeventhSon = {
			name: 'A', gender: 'male', children: [
				{name: 'B', gender: 'male', children: []},
				{name: 'C', gender: 'male', children: []},
				{name: 'D', gender: 'male', children: []},
				{name: 'E', gender: 'male', children: []},
				{name: 'F', gender: 'male', children: []},
				{name: 'G', gender: 'male', children: []},
				{name: 'H', gender: 'male', children: []} // This is a seventh son, but he has no children
			]};

		const actualResult = findSeventhSonsOfSeventhSons(seventhSonOfSeventhSon);
		expect(actualResult).toEqual(new Set());
	});

	test("Seventh son exists,but the seventh son of seventh son is a daughter", () => {
		const seventhSonOfSeventhSon = {
			name: 'A', gender: 'male', children: [
				{name: 'B', gender: 'male', children: []},
				{name: 'C', gender: 'male', children: []},
				{name: 'D', gender: 'male', children: []},
				{name: 'E', gender: 'male', children: []},
				{name: 'F', gender: 'male', children: []},
				{name: 'G', gender: 'male', children: []},
				{name: 'H', gender: 'male', children: [ // This is a seventh son
						{name: 'I', gender: 'male', children: []},
						{name: 'J', gender: 'male', children: []},
						{name: 'K', gender: 'male', children: []},
						{name: 'L', gender: 'male', children: []},
						{name: 'M', gender: 'male', children: []},
						{name: 'N', gender: 'male', children: []},
						{name: 'O', gender: 'female', children: []} // The seventh son of a seventh son is in fact a daughter!
					]}
			]};

		const actualResult = findSeventhSonsOfSeventhSons(seventhSonOfSeventhSon);
		expect(actualResult).toEqual(new Set());
	});

	test("Seventh son exists,but the chain of sons is broken", () => {
		const seventhSonOfSeventhSon = {
			name: 'A', gender: 'male', children: [
				{name: 'B', gender: 'male', children: []},
				{name: 'C', gender: 'male', children: []},
				{name: 'D', gender: 'male', children: []},
				{name: 'E', gender: 'female', children: []}, //  The chain of sons is broken!
				{name: 'F', gender: 'male', children: []},
				{name: 'G', gender: 'male', children: []},
				{name: 'H', gender: 'male', children: [
						{name: 'I', gender: 'male', children: []},
						{name: 'J', gender: 'male', children: []},
						{name: 'K', gender: 'male', children: []},
						{name: 'L', gender: 'male', children: []},
						{name: 'M', gender: 'male', children: []},
						{name: 'N', gender: 'male', children: []},
						{name: 'O', gender: 'male', children: []}
					]}
			]};

		const actualResult = findSeventhSonsOfSeventhSons(seventhSonOfSeventhSon);
		expect(actualResult).toEqual(new Set());
	});

	test("It contains seventh son of seventh son", () => {
		const seventhSonOfSeventhSon = {
			name: 'A', gender: 'male', children: [
				{name: 'B', gender: 'male', children: []},
				{name: 'C', gender: 'male', children: []},
				{name: 'D', gender: 'male', children: []},
				{name: 'E', gender: 'male', children: []},
				{name: 'F', gender: 'male', children: []},
				{name: 'G', gender: 'male', children: []},
				{name: 'H', gender: 'male', children: [ // This is a seventh son
						{name: 'I', gender: 'male', children: []},
						{name: 'J', gender: 'male', children: []},
						{name: 'K', gender: 'male', children: []},
						{name: 'L', gender: 'male', children: []},
						{name: 'M', gender: 'male', children: []},
						{name: 'N', gender: 'male', children: []},
						{name: 'O', gender: 'male', children: []} // This is a seventh son of a seventh son
					]}
			]};

		const actualResult = findSeventhSonsOfSeventhSons(seventhSonOfSeventhSon);
		expect(actualResult).toEqual(new Set('O'));
	});
});