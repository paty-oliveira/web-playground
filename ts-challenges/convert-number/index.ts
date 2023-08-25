function convertNumber(input: string): string {
	let letters: string = "";

	for (let i: number = 1; i < input.length; i += 2) {
		letters += String.fromCharCode(parseInt(input[i-1]) + parseInt(input[i]))
	}
	return letters;
}

export default convertNumber;