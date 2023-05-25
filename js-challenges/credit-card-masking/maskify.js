function maskify(cc) {
	const lastFourDigits = cc.slice(-4);
	return lastFourDigits.padStart(cc.length, '#');
}

module.exports = maskify;