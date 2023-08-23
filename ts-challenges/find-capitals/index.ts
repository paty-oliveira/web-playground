const isUpperCase = (letter: string): boolean => {
	return letter.toUpperCase() === letter;
}

function findCapitals (word: string): (number | string)[] {
	return [...word]
		.map((letter: string, index: number) => isUpperCase(letter) ? index: "")
		.filter(element => element !== "")
}

export default findCapitals;