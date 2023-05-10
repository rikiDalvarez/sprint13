let getEmployee = (array, id) => {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].id = id) {
				resolve(array[i])
			} else {
				reject(new Error("no employee found"))
			}
		}
	})
}

module.exports = getEmployee;