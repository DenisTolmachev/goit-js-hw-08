import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');
const FORM_DATA = 'feedback-form-state';
let formData = {};
const savedDataValue = JSON.parse(localStorage.getItem(FORM_DATA));

rewriteInputData();

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();
  if (userForm.elements.email.value == '' || userForm.elements.message.value == '') {
    alert('Заполните все поля');
    return;
  }
  localStorage.removeItem(FORM_DATA);
  e.currentTarget.reset();
  console.log(formData);
};

function rewriteInputData() {
  if (savedDataValue) {
    Object.keys(savedDataValue || {}).forEach(item => (userForm[item].value = savedDataValue[item]));
  }
}

userForm.addEventListener('input', throttle(inputHandler, 500));
userForm.addEventListener('submit', submitHandler);

//Варіант який не білдиться на GitHub

// const userFeedbackForm = document.querySelector('.feedback-form');
// const FORM_DATA = 'feedback-form-state';
// const formData = JSON.parse(localStorage.getItem(FORM_DATA)) ?? {};

// userFeedbackForm.elements.email.value = formData.email ?? '';
// userFeedbackForm.elements.message.value = formData.message ?? '';

// const inputHandler = e => {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(FORM_DATA, JSON.stringify(formData));
//   //console.log(formData);
// };

// const submitHandler = e => {
//   e.preventDefault();
//   if (
//     userFeedbackForm.elements.email.value == '' ||
//     userFeedbackForm.elements.message.value == ''
//   ) {
//     alert('Заполните все поля');
//     return;
//   }
//   localStorage.removeItem(FORM_DATA);
//   e.currentTarget.reset();
//   console.log(formData);
// };

// userFeedbackForm.addEventListener('input', throttle(inputHandler, 500));
// userFeedbackForm.addEventListener('submit', submitHandler);
