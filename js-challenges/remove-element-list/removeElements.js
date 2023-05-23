function removeElements(elementsArray, elementsToRemove) {
	return elementsArray.filter((element) => !elementsToRemove.includes(element));
}

module.exports = removeElements;