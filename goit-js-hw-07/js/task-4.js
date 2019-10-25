'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const prefs = {
    incrButton: document.querySelector('button[data-action="increment"]'),
    decrButton: document.querySelector('button[data-action="decrement"]'),
    outputField: document.querySelector('#counter > #value')
};

let counterValue = 0;

prefs.outputField.textContent = counterValue;

prefs.incrButton.addEventListener('click', () => {
  counterValue += 1;
  prefs.outputField.textContent = counterValue;
});

prefs.decrButton.addEventListener('click', () => {
  counterValue -= 1;
  prefs.outputField.textContent = counterValue;
});