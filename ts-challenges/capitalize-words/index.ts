function dropCap(s: string): string {
	return s
		.toLowerCase()
		.split(" ")
		.map(word => {
			if (word.length > 2) {
				return word[0].toUpperCase() + word.slice(1)
			}
			return word
		})
		.join(" ")
}

export default dropCap;