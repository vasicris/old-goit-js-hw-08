import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const updateLocalStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

const fillFormFields = () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData); 
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', updateLocalStorage);

document.addEventListener('DOMContentLoaded', fillFormFields);

form.addEventListener('submit', handleSubmit)
