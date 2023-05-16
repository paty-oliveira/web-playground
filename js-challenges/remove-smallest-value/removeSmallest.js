function removeSmallest(numbers) {
	const smallestNumber = Math.min(...numbers);

	return numbers.filter((number, index) => index !== numbers.indexOf(smallestNumber));
}

module.exports = removeSmallest;