//1.3: Promises & Callbacks
const { employees, salaries } = require("./mockdata")
const getEmployee = require("./getEmployee")
const getSalary = require("./getSalary")


//n1e1
// create a function that return a promise with rej and res
function returnPromise(string) {
	return new Promise((res, rej) => {
		if (string.length > 5) {
			res("large name")
		} else {
			rej(new Error("too short name"))
		}
	})
}
console.log(returnPromise("ricardo"), returnPromise("ri"))

//n1e2
//create a arrow function with a param and a callback funcs
let arrFunc = (variable, func) => {
	return func(variable);
}
console.log(arrFunc("ricardo", returnPromise));

//n2e1
const longEmployer = async (array, id) => {
	const employer = await getEmployee(array, id);
	console.log(employer)
}
longEmployer(employees, 2)

// n2e2
getSalary(salaries, employees[2])


// n2e3
const getSalaryAndEmployer = async (employees, salaries, id) => {
	const employer = await getEmployee(employees, id)
	if (employer) return getSalary(salaries, employer)
}

getSalaryAndEmployer(employees, salaries, 3)

//n3e1

const getCatch = async (array, employer) => {
	try {
		const employerFound = await getSalary(array, employer)
		if (employerFound) { return employerFound }
	} catch (error) {
		console.log(error)
	}
}

getCatch(salaries, { id: 4, name: "tata" })