'use strict';

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.

const products = [{
		name: 'Радар',
		price: 1300,
		quantity: 4
	},
	{
		name: 'Сканер',
		price: 2700,
		quantity: 3
	},
	{
		name: 'Дроид',
		price: 400,
		quantity: 7
	},
	{
		name: 'Захват',
		price: 1200,
		quantity: 2
	},
];

const getAllPropValues = (products, prop) => {
	let propValues = [];

	for (const product of products) {
		if (prop in product) {
			propValues.push(product[prop]);
		}
	}

	return propValues;
};

console.log(getAllPropValues(products, 'price'));

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []