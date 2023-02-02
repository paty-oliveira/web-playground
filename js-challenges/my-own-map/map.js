// You should implement your own version of map, which can be passed an array and a callback,
// and will return a new array with the callback run against every element. For example:

function map(array, callback) {
    const newArray = []
    for (let element = 0; element < array.length; element++ ){
        let newElement = callback(array[element])
        newArray.push(newElement)
    }
    return newArray
}

module.exports = map;