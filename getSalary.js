const getSalary = (array, employee) => {

	return new Promise((resolve, reject) => {
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			if (employee.id === element.id) {
				const obj = { name: employee.name, salary: element.salary }
				resolve(obj)
			}
		}
		reject('not employee found')
	})
}

module.exports = getSalary;