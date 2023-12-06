import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const items = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
const dataForm = {};
items.form.addEventListener('submit', onFormSubmit);
items.form.addEventListener('input', throttle(onInput, 500));

onReload();

function onInput(evt) {
  const message = evt.target;
  dataForm[message.name] = message.value || '';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onReload() {
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parseData) {
    items.input.value = parseData.email ?? '';
    items.textarea.value = parseData.message ?? '';
     dataForm.email = items.input.value;
     dataForm.message = items.textarea.value;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (dataForm.email && dataForm.message) {
    console.log(dataForm);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    console.error(
      'Please fill in both email and message fields before submitting.'
    );
  }
}
