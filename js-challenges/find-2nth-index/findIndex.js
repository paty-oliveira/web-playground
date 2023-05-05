export function findSecondIndex(characters, symbol) {
	return characters.indexOf(symbol) !== -1 ? characters.split(symbol, 2).join(symbol).length : -1;
}