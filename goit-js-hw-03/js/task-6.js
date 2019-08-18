'use strict';

// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта 
// (значение свойства name). Возвращает общую стоимость продукта (цена * количество).


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

const calculateTotalPrice = (productsArr, productName) => {
	for (const product of productsArr) {
	// не уверен что здесь уместна деструктуризация обьекта, но все же решил попробовать чтоб освежить в памяти 
	// и применить на практике. Скорее всего плохая идея создавать локальные переменные без явной на то нужды?
	const {name, price, quantity} = product;

		if (productName === name) {
			return (price * quantity);
		};
	};
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800