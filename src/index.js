/* eslint-disable func-names */
import { validateInput } from "./validation.js";
import { NUMBER_RANGE_MIN, NUMBER_RANGE_MAX } from "./config.js";

function BaseballGame() {
  this.generateRandomNumbers = function () {
    const numberSet = new Set();

    while (numberSet.size < 3) {
      // eslint-disable-next-line no-undef
      const newNumber = MissionUtils.Random.pickNumberInRange(
        NUMBER_RANGE_MIN,
        NUMBER_RANGE_MAX
      );

      if (!numberSet.has(newNumber)) {
        numberSet.add(newNumber);
      }
    }

    return [...numberSet].join("");
  };

  this.computerNumbers = this.generateRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = this.compareNumbers(computerInputNumbers, userInputNumbers);

    return result;
  };

  this.playWithGeneratedNumber = function (userInputNumbers) {
    return this.play(this.computerNumbers, userInputNumbers);
  };

  this.compareNumbers = function (computerInputNumbers, userInputNumbers) {
    const answerSet = new Set(computerInputNumbers);
    let ballCount = 0;
    let strikeCount = 0;
    let idx = 0;

    for (; idx < 3; idx += 1) {
      if (userInputNumbers[idx] === computerInputNumbers[idx]) {
        strikeCount += 1;
      } else if (answerSet.has(userInputNumbers[idx])) {
        ballCount += 1;
      }
    }

    return { ballCount, strikeCount };
  };
}

const baseballGame = new BaseballGame();

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

  console.log(baseballGame.playWithGeneratedNumber(userInput));
};

const initEventListener = () => {
  document.querySelector("form").addEventListener("submit", handleSubmitForm);

  document
    .querySelector("#submit")
    .addEventListener("click", handleClickSubmitButton);
};

initEventListener();
