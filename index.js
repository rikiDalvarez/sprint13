//1.3: Promises & Callbacks
const { employees, salaries } = require("./mockdata")
const getEmployee = require("./getEmployee")
const getSalary = require("./getSalary")


// console.log(employees, salaries)

//n1e1
// create a function that return a promise with rej and res
// function returnPromise(string) {
// 	return new Promise((res, rej) => {
// 		if (string.length > 5) {
// 			res("large name")
// 		} else {
// 			rej(new Error("too short name"))
// 		}
// 	})
// }
// console.log(returnPromise("ricardo"), returnPromise("ri"))

// //n1e2
// //create a arrow function with a param and a callback funcs
// let arrFunc = (variable, func) => {
// 	return func(variable);
// }
// console.log(arrFunc("ricardo", returnPromise));

// const hour = 23;
// function check(hour) {
// 	if (hour < 18 && hour > 7) {
// 		console.log("its day time")
// 	} else {
// 		console.log("its night time")
// 	}
// }

//n2e1
// const longEmployer = async (array, id) => {
// 	const employer = await getEmployee(array, id);
// 	console.log(employer)
// }
// longEmployer(employees, 2)

// n2e2
// getSalary(salaries, employees[2])


// //nivell 2
// //exercise 3

// getSalary(salaries, employees[0]).then((employer) => console.log(employer))

// //nivell 3 
// //exercise 1

// getSalary(salaries, {
// 	id: 5,
// 	name: 'tata'
// }).then((employer) => console.log(employer)).catch(error => { console.error(error) })

