"use strict";

// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию 
// calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут только слова и пробелы) 
// и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

const calculateEngravingPrice = function (message, pricePerWord = 0) {

    const wordsArr = message.split(" ");

    return wordsArr.length * pricePerWord;
}

console.log(calculateEngravingPrice("From Sarah with love", 100));
console.log(calculateEngravingPrice("Happy birthday", 300));
console.log(calculateEngravingPrice("1px solid red", 175));