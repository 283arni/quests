import {disableScrolling, enableScrolling} from './scroll-lock';

const fieldName = document.querySelector('#name');
const closeBtnLocal = document.querySelector('.modal_location .modal__close-btn');

const focusElement = (element) => {
  setTimeout(() => {
    element.focus();
  }, 300);
};

const openModal = (modal, callback, preventScrollLock) => {
  modal.classList.add('modal_active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    disableScrolling();
  }
};

const closeModal = (modal, callback, preventScrollLock) => {
  modal.classList.remove('modal_active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(enableScrolling, 300);
  }
};

const onEscPress = (evt, modal, callback) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal_active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const setModalListeners = (modal, closeCallback, preventScrollLock) => {
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close-btn');

  closeBtn.addEventListener('click', () => {
    closeModal(modal, closeCallback, preventScrollLock);
  });

  overlay.addEventListener('click', () => {
    closeModal(modal, closeCallback, preventScrollLock);
  });

  document.addEventListener('keydown', (evt) => {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });
};

const setupModal = (modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) => {
  if (modalBtns) {

    modalBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        if (!noPrevDefault) {
          evt.preventDefault();
        }

        openModal(modal, openCallback, preventScrollLock);

        if (btn.dataset.modal === 'feedback') {
          focusElement(fieldName);
        }

        if (btn.dataset.modal === 'location') {
          focusElement(closeBtnLocal);
        }
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};

export {setupModal, openModal, closeModal};
