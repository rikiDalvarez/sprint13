//1.3: Promises & Callbacks


//nivel 1
//exercise 1
const dayLight = true
let test = (daylight) => {
	if (dayLight) {
		return Promise.resolve("its day light")
	} else {
		return Promise.reject("its not daylight")
	}
}

test().then((res, rej) => console.log(res, rej))

//nivel 1 
//exercise 2

const hour = 23;

function check(hour) {
	if (hour < 18 && hour > 7) {
		console.log("its day time")
	} else {
		console.log("its night time")
	}
}

let arrFunc = (variable, func) => {
	return func(variable);
}

arrFunc(hour, check);

//level 2
//exercise 1

let employees = [{
	id: 1,
	name: 'Linux Torvalds'
}, {
	id: 2,
	name: 'Bill Gates'
}, {
	id: 3,
	name: 'Jeff Bezos'
}];

let salaries = [{
	id: 1,
	salary: 4000
}, {
	id: 2,
	salary: 1000
}, {
	id: 3,
	salary: 2000
}];

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

getEmployee(employees, 1).then((employee) => console.log(employee))

//nivel 2
//exercise 2

const getSalary = (array, employee) => {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			if (employee.id == element.id) {
				const obj = { name: employee.name, salary: element.salary }
				resolve(obj)
			} else {
				reject("no employee found")
			}
		}
	})
}

getSalary(salaries, employees[0]).then((employer) => console.log(employer.salary))

//nivell 2
//exercise 3

getSalary(salaries, employees[0]).then((employer) => console.log(employer))

//nivell 3 
//exercise 1

getSalary(salaries, {
	id: 5,
	name: 'tata'
}).then((employer) => console.log(employer)).catch(error => { console.error(error) })


