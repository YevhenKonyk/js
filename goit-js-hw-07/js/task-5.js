'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 
// 'незнакомец'

const prefs = {
    nameInput: document.querySelector('.js-greeter > .js-name-input'),
    nameOutput: document.querySelector('.js-greeter .js-name-output'),
    nameOutputPlaceholder: 'Anonymous'
};

const handleNameFieldInput = e => {
  !prefs.nameInput.value ? prefs.nameOutput.textContent = prefs.nameOutputPlaceholder : prefs.nameOutput.textContent = e.target.value;
}; 

prefs.nameInput.addEventListener('input', handleNameFieldInput);


