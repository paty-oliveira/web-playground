function positiveSum(array) {
	return array
		.filter((element) => element > 0)
		.reduce((firstElement, secondElement) => firstElement + secondElement, 0);
}

module.exports = positiveSum;
