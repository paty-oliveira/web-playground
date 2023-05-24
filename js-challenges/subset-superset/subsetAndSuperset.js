function contains(s1, s2) {
	return [...s1].every((element) => s2.has(element));
}

function isSubsetOf(s1, s2) {
	return contains(s1, s2);
}

function isSupersetOf(s1, s2) {
	return contains(s2, s1);
}

module.exports = {
	isSupersetOf: isSupersetOf(),
	isSubsetOf: isSubsetOf()
}