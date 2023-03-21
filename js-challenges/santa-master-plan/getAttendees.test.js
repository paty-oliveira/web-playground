const getAttendees = require('./getAttendees');

describe("getAttendees function", () => {

	describe("Nobody is attending the party", () => {
		it("should return an empty attendees list", function () {
			const invitedPeople = ['Manuel', 'Maria', 'Patty'];
			const peopleResponses = [
				{name: 'Manuel', response: 'declined'},
				{name: 'Maria', response: 'declined'},
				{name: 'Patty', response: 'declined'},
			];

			const actualResult = getAttendees(invitedPeople, peopleResponses);
			const expectedResult = [];

			expect(actualResult).toEqual(expectedResult);
		});
	});

	describe("Everyone accepted the invitation", () => {
		it("should return a list of attendees", () => {
			const invitedPeople = ['Manuel', 'Maria', 'Patty'];
			const peopleResponses = [
				{name: 'Manuel', response: 'accepted'},
				{name: 'Maria', response: 'accepted'},
				{name: 'Patty', response: 'accepted'},
			];

			const actualResult = getAttendees(invitedPeople, peopleResponses);
			const expectedResult = ['Manuel', 'Maria', 'Patty'];

			expect(actualResult).toEqual(expectedResult);
		});
	});

	describe("Santa assumes those did not respond will show up", () => {
		it("should return a list of attendees even without any response", function () {
			const invitedPeople = ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'];
			const peopleResponses = [
				{name: 'Easter Bunny', response: 'declined'},
				{name: 'Jack Frost', response: 'declined'},
				{name: 'Tooth Fairy', response: 'accepted'}
			]

			const actualResult = getAttendees(invitedPeople, peopleResponses);
			const expectedResult = ['Tooth Fairy', 'Frosty the Snowman'];

			expect(actualResult).toEqual(expectedResult);
		});
	});
})