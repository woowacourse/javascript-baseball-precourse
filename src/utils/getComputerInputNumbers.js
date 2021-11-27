import {
  USER_INPUT_MAX_LENGTH_THREE,
  COMPUTER_INPUT_MIN_NUMBER,
  COMPUTER_INPUT_MAX_NUMBER,
} from "./constants.js";

const getComputerInputNumbers = () => {
  const numbers = [];
  while (numbers.length < USER_INPUT_MAX_LENGTH_THREE) {
    const randomNumber = window.MissionUtils.Random.pickNumberInRange(
      COMPUTER_INPUT_MIN_NUMBER,
      COMPUTER_INPUT_MAX_NUMBER
    );
    const isContainRandomNumber = numbers.includes(randomNumber);

    if (isContainRandomNumber === false) numbers.push(randomNumber);
  }

  return Number(numbers.join(""));
};

export default getComputerInputNumbers;
