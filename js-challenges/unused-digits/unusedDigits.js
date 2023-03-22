function unusedDigits(list) {
	const listDigits = list.join('');

	return [..."0123456789"].filter(digit => !listDigits.includes(digit)).join('')
}

module.exports = unusedDigits;