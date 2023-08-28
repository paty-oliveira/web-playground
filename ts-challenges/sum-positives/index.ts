function sumTwoSmallestNumbers(numbers: number[]): number {
	const [first, second] = numbers.sort((first, second) => first - second)

	return first + second
}

export default sumTwoSmallestNumbers;