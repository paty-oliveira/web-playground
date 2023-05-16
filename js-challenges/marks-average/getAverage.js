function getAverage(marks) {
	const sum = marks.reduce((acc, curr) => acc + curr, 0);

	return Math.floor(sum / marks.length);
}

module.exports = getAverage;