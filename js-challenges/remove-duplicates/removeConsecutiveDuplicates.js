function removeConsecutiveDuplicates(statement) {
	return statement
		.split(' ')
		.filter((word, index, arr) => word !== arr[index + 1])
		.join(' ');
}

module.exports = removeConsecutiveDuplicates;