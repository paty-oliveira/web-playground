function squareDigits(num: Number): number {
	return +String(num)
		.split("")
		.map(element => Number(element) ** 2)
		.join("")
}

export default squareDigits;