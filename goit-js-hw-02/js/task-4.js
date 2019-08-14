"use strict";

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = function (string) {
    // debugger;
    const stringsArr = string.split(" ");
    let strMaxLength = 0;
    let strMaxLengthIndex = 0;

    for (let i = 0; i < stringsArr.length; i++) {
        if (stringsArr[i].length > strMaxLength) {
            strMaxLength = stringsArr[i].length;
            strMaxLengthIndex = i;
        }
    }

    return stringsArr[strMaxLengthIndex];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'