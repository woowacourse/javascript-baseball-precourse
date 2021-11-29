function getInputValue() {
  const $userInput = document.querySelector("#user-input");
  const numbers = $userInput.value.split("").map((number) => Number(number));
  return numbers;
}

export default function getUserInput(computerInputNumbers, play) {
  const $submit = document.querySelector("#submit");
  $submit.addEventListener("click", (event) => {
    event.preventDefault();
    const userInputNumbers = getInputValue();
    play(computerInputNumbers, userInputNumbers);
  });
}
