/* eslint-disable no-console */
const handleSubmitForm = (e) => {
  e.preventDefault();
};

const handleClickSubmitButton = () => {
  const userInput = document.querySelector("#user-input").value.trim();
  console.log(userInput);
};

document.querySelector("form").addEventListener("submit", handleSubmitForm);

document
  .querySelector("#submit")
  .addEventListener("click", handleClickSubmitButton);
