export default (function () {
  const KeyName = {
    TAB: 'Tab',
    ENTER: 'Enter',
  };

  const modal = document.querySelector('.modal_feedback');
  const fieldName = modal.querySelector('#name');
  const errorName = modal.querySelector('#error-name');
  const fieldMail = modal.querySelector('#mail');
  const errorMail = modal.querySelector('#error-mail');
  const textarea = modal.querySelector('#text');
  const submitBtn = modal.querySelector('button');
  const checkbox = modal.querySelector('#check');
  const checkboxLabel = modal.querySelector('#check-label');
  const errorCheck = modal.querySelector('#error-check');
  const closeBtn = modal.querySelector('.modal__close-btn');

  const loopForm = () => {
    closeBtn.addEventListener('keydown', (e) => {
      e.preventDefault();

      if (e.key === KeyName.TAB) {
        fieldName.focus();
      }

      if (e.key === KeyName.ENTER) {
        closeBtn.click();
      }
    });
  };

  const removeStandartValidation = (element) => {
    element.removeAttribute('required');
    element.removeAttribute('minlength');
  };

  const validateElementFail = (element, errorField, text) => {
    if (element) {
      element.style.border = '1px solid #f2890f';
    }

    errorField.textContent = text;
    errorField.style.display = 'inline';
  };

  const validateElementSuccess = (element, errorField) => {
    if (element) {
      element.style.border = '1px solid #2CDB52';
    }

    errorField.style.display = 'none';
  };

  const validateForm = () => {
    let isValid = true;
    const isAt = fieldMail.value.indexOf('@') < 0;

    if (fieldName.value.length <= 3) {
      validateElementFail(fieldName, errorName, 'Введите свое имя');
      isValid = false;
    } else {
      validateElementSuccess(fieldName, errorName);
    }

    if (fieldMail.value.length <= 6 || isAt) {
      validateElementFail(fieldMail, errorMail, 'Введён некорректный e-mail, попробуйте заново');
      isValid = false;
    } else {
      validateElementSuccess(fieldMail, errorMail);
    }

    if (!checkbox.checked) {
      validateElementFail(null, errorCheck, 'Нужно принять соглашение');
      isValid = false;
    } else {
      validateElementSuccess(null, errorCheck);
    }

    return isValid;
  };


  submitBtn.disabled = true;

  removeStandartValidation(fieldName);
  removeStandartValidation(fieldMail);
  loopForm();

  modal.addEventListener('change', () => {
    validateForm();

    if (validateForm()) {
      submitBtn.disabled = false;
      return;
    }

    submitBtn.disabled = true;
  });

  submitBtn.addEventListener('click', () => {

    const question = {
      name: fieldName.value,
      mail: fieldMail.value,
      text: textarea.value,
    };

    localStorage.setItem('question', JSON.stringify(question));
  });

  checkboxLabel.addEventListener('keydown', (e) => {
    if (e.key === KeyName.ENTER) {
      checkboxLabel.click();
    }
  });
});
