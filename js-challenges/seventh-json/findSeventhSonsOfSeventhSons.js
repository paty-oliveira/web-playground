function findSeventhSonsOfSeventhSons(data) {
	const childrenList = data.children

	let firstGenerationGender = new Set();
	let secondGenerationGender = new Set();
	let seventhOfSeventhSonName = new Set();

	childrenList.forEach((children) => {
		firstGenerationGender.add(children.gender)
	})

	const seventhSonChildren = childrenList.slice(-1)[0]?.children;

	if (firstGenerationGender.size === 1 && firstGenerationGender.has('male')) {
		seventhSonChildren.forEach((children) => {
			secondGenerationGender.add(children.gender)
		})
	}

	if (secondGenerationGender.size === 1 && secondGenerationGender.has('male')) {
		seventhOfSeventhSonName.add(seventhSonChildren.slice(-1)[0].name);
	}

	return seventhOfSeventhSonName;
}

module.exports = findSeventhSonsOfSeventhSons;