'use strict';

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников 
// и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const employeesObj = {
	mango: 100,
	poly: 150,
	alfred: 80,
};

const countTotalSalary = employees => {
	return Object.values(employees).reduce( ( total, current) => { return total + current }, 0);
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400