"use strict";

// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.

// Удалить первый элемент массива
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift("Lux");
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push("Jay", "Kiwi");
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';

for (let i = 0; i < users.length; i++) {
    
    if (users[i] === userToDelete) {
        users.splice(i, 1);
        break;
    }
}
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore

const userToInsert = 'Kong';
const insertBefore = 'Jay';

for (let i = 0; i < users.length; i++) {
    if (users[i] === insertBefore) {
        users.splice(i, 0, userToInsert);
        break;
    } 
}

console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]