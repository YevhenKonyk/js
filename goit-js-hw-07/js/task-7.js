'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

const prefs = {
    rangeInput: document.querySelector('.range-input > #font-size-slider'),
    rangeOutput: document.querySelector('.range-input > #text')
};

prefs.rangeInput.setAttribute('min', 0);
prefs.rangeInput.setAttribute('max', 100);
prefs.rangeInput.setAttribute('value', prefs.rangeInput.getAttribute('min'));

const handleRangeInput = (e) => {
  const value = e.currentTarget.value;
  prefs.rangeOutput.style.fontSize = value + 'px';
};

prefs.rangeInput.addEventListener('input', handleRangeInput);