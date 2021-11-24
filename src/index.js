import { NUMBER_RANGE_MIN, NUMBER_RANGE_MAX } from "./config.js";
import { validateInput } from "./validation.js";

const generateRandomNumbers = () => {
  const numberSet = new Set();

  while (numberSet.size < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(
      NUMBER_RANGE_MIN,
      NUMBER_RANGE_MAX
    );

    if (!numberSet.has(newNumber)) {
      numberSet.add(newNumber);
    }
  }

  return [...numberSet].join('');
};

const handleSubmitForm = (e) => {
  e.preventDefault();
};

const handleClickSubmitButton = () => {
  const userInput = document.querySelector("#user-input").value.trim();

  const validationResult = validateInput(userInput);

  if (!validationResult.result) {
    alert(validationResult.message);
    document.querySelector("#user-input").value = "";

    return;
  }

  console.log(generateRandomNumbers());
};

const initEventListener = () => {
  document.querySelector("form").addEventListener("submit", handleSubmitForm);

  document
    .querySelector("#submit")
    .addEventListener("click", handleClickSubmitButton);
};

initEventListener();
