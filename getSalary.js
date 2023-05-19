const getSalary = (array, employee) => {
	if (!Array.isArray(array)) { throw new Error("argument[0] must be array") };
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