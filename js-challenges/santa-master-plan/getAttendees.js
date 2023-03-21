function getAttendees(invitedPeople, peopleResponses) {
	return peopleResponses
		.filter(response => response.response === 'accepted')
		.map(people => people.name)
}

module.exports = getAttendees;