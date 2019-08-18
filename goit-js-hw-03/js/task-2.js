'use strict';

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

const countObjProps = obj => {
    return Object.keys(obj).length;
};

console.log( countObjProps({}) );
console.log( countObjProps({ name: 'Mango', age: 2 }) );
console.log( countObjProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) );