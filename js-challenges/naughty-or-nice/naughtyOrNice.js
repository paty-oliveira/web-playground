function naughtyOrNice(data) {
	let naughtyTotal = 0;
	let niceTotal = 0;

	for (let month in data){
		for (const [key, value] of Object.entries(data[month])) {
			if (value === 'Naughty'){
				naughtyTotal += 1;
			} else {
				niceTotal += 1;
			}
		}
	}

	return niceTotal > naughtyTotal ? 'Nice!' : 'Naughty!';
}

module.exports = naughtyOrNice