// Context
// According to Wikipedia : "The seventh son of a seventh son is a concept from folklore regarding special powers given
// to, or held by, such a son. The seventh son must come from an unbroken line with no female siblings born between,
// and be, in turn, born to such a seventh son."
//
// Your task
// You will be given a string of JSON, consisting of a family tree containing people's names, genders and children.
// Your task will be to find the seventh sons of seventh sons in the family tree, and return a set of their names.
// If there are none, return an empty set.

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