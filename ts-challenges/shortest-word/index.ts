function findShort(s: string): number {
	return s
		.split(" ")
		.sort((a, b) => a.length - b.length)
		[0].length
}

export default findShort;