function getCharacters(obj, key, val) {
	const capitalizedValue = val.charAt(0).toUpperCase()

	return obj.characters.filter(character => {
		return character[key]?.includes(capitalizedValue);
	});
}

module.exports = getCharacters;