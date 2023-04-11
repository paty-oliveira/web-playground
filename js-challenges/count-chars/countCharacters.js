function countCharacters(string) {
	const occ = {};

	for (const letter in string) {
		if (!occ.hasOwnProperty(string[letter])){
			occ[string[letter]] = 1;
		} else {
			occ[string[letter]] += 1;
		}
	}

	return occ;
}

module.exports = countCharacters;
