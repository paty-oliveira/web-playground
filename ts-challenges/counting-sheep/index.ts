function countSheep(arrayOfSheep: boolean[]): number {
	return arrayOfSheep.reduce((total, current) => current ? total + 1 : total, 0)
}

export default countSheep;
