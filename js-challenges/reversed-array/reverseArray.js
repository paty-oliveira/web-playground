function reverseArray(arrayLength) {
	return [...Array.from({length: arrayLength}, (_, i) => i+1)].reverse()
}

module.exports = reverseArray;
