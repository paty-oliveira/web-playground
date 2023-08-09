function getVowelCount(str: string): number {
	return Array.from(str).filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length;
}

export default getVowelCount;