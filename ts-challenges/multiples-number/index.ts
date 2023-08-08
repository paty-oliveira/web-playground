function findMultiples(integer: number, limit: number): number[] {
	return Array.from({ length: (limit - integer) / integer + 1 }, (_, i) => integer + i * integer);
}

export default findMultiples;