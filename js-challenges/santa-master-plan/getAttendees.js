function getAttendees(invitedPeople, peopleResponses) {
	const personsDeclined = peopleResponses
		.filter(response => response.response === 'declined')
		.map(person => person.name);

	return invitedPeople.filter(person => !personsDeclined.includes(person))
}

module.exports = getAttendees;