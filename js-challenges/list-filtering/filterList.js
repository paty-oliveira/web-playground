function filterList(list) {
	return list.filter((element) => {
		 return typeof element === 'number'
	})
}

module.exports = filterList;