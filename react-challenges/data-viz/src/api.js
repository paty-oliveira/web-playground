const endpoint = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';

export async function getRandomNumbers() {
	try {
		const response = await fetch(endpoint);
		const data = await response.text();
		return cleanResponseData([...data]);

	} catch (e) {
		throw new Error('Error while getting data: ' + e.message);
	}
}

function cleanResponseData(data) {
	return data
		.filter((char) => char !== '\n')
		.map((char) => parseInt(char))
}
