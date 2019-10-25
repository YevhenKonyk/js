'use strict';

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов 
// очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const prefs = {
    boxesCountInput: document.querySelector('#controls > input[type="number"]'),
    renderButton: document.querySelector('button[data-action="render"]'),
    destroyButton: document.querySelector('button[data-action="destroy"]'),
    boxesCntr: document.querySelector('#boxes')
};

const getRandomColor = () => `rgb(${Math.floor( Math.random() * Math.floor(255) )}, 
    ${Math.floor( Math.random() * Math.floor(255) )}, ${Math.floor( Math.random() * Math.floor(255) )} )`;

const setStyles = (el, stylesObj) => {
    const props = Object.keys(stylesObj);
    
    for (const prop of props) {
        el.style[prop] = stylesObj[prop];
    }
};

const createBoxes = (amount) => {
  if ( !amount || Number(amount) === 0) {
    return;
  }

  const boxes = [];

  const initialStyles = {
    width: '30px',
    height: '30px',
    backgroundColor: getRandomColor(),
  };
  
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    boxes.push(element);
  }

  setStyles(boxes[0], initialStyles);

  if (boxes.length > 1) {
    for (let i = 1; i < boxes.length; i += 1) {
      const prevIdx = i - 1;
      const element = boxes[i];

      const elementStyles = {
        width: Number.parseInt(boxes[prevIdx].style.width) + 10 + 'px',
        height: Number.parseInt(boxes[prevIdx].style.height) + 10 + 'px',
        backgroundColor: getRandomColor()
      };

      setStyles(element, elementStyles);
    }
  }

  prefs.boxesCntr.insertAdjacentHTML('afterbegin', boxes.map( el => el.outerHTML).join(''));
};

const destroyBoxes = () => {
  prefs.boxesCntr.innerHTML = '';
  prefs.boxesCountInput.value = 0;
};

prefs.renderButton.addEventListener('click', () => {
  createBoxes(prefs.boxesCountInput.value);
});

prefs.destroyButton.addEventListener('click', () => {
  destroyBoxes();
});