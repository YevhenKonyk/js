'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validationField = document.querySelector('#validation-input');

const checkFieldLength = (e) => {
  const inputField = e.currentTarget;

  if ( inputField.value.length !== Number( inputField.dataset.length ) ) {
    
    if ( inputField.classList.length > 0 && inputField.classList.contains('valid') ) {
      inputField.classList.remove('valid');
    }

    inputField.classList.add('invalid');
  } else {

    if ( inputField.classList.length > 0 && inputField.classList.contains('invalid') ) {
      inputField.classList.remove('invalid');
    }

    inputField.classList.add('valid');
  }

};

validationField.addEventListener('blur', checkFieldLength);