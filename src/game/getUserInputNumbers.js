function checkTheRightUserInput(userInput) {
  console.log(userInput);
}

export default function getUserInputNumbers() {
  const $userInput = document.querySelector('#user-input');
  const $submit = document.querySelector('#submit');

  $submit.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = $userInput.value;
    checkTheRightUserInput(userInput);
  });
}
