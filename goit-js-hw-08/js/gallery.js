'use strict';
import galleryItems from './gallery-items.js';



const prefs = {
    galleryList: document.querySelector('.js-gallery'),
    modal: {
        lightbox: document.querySelector('.js-lightbox'),
        overlay: document.querySelector('.js-lightbox__content'),
        fullImage: document.querySelector('.js-lightbox__content > img'),
        closeButton: document.querySelector('button[data-action="close-lightbox"]'),
    }
};

const generateListItemMarkup = ( { preview, original, description } ) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${preview}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />

    <span class="gallery__icon">
      <i class="material-icons"></i>
    </span>
  </a>
</li>
    `;
};

const generateListItems = items => items.map( item => generateListItemMarkup(item) ).join('');

const galleryMarkup = generateListItems(galleryItems);

prefs.galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
// Events
prefs.galleryList.addEventListener('click', galleryListClickHandler);
prefs.modal.closeButton.addEventListener('click', closeButtonClickHandler);
prefs.modal.overlay.addEventListener('click', overlayClickHandler);
// Handlers
function galleryListClickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
      return;
  }

  prefs.modal.fullImage.setAttribute('src', e.target.dataset.source);
  prefs.modal.fullImage.setAttribute('alt', e.target.attributes.alt.value);

  openModal();
};

function overlayClickHandler(e) {
  // console.log(e.target, e.currentTarget);
  if (e.target !== e.currentTarget) { 
    return;
  };

  closeModal();
};

function closeButtonClickHandler() {
  closeModal();
};

function bodyKeydownHandler(e) {
  
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
};

function openModal() { 
  prefs.modal.lightbox.classList.add('is-open'); 
  document.body.addEventListener('keydown', bodyKeydownHandler);
};

function closeModal() { 
  prefs.modal.lightbox.classList.remove('is-open'); 
  document.body.removeEventListener('keydown', bodyKeydownHandler);
};