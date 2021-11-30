import {
  GAME_NUMBER_LENGTH,
  MAX_NUMBER,
  MIN_NUMBER,
} from "../constants/index.js";

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};

const getComputerNumber = () => {
  const computerNumbers = new Set();

  while (computerNumbers.size !== GAME_NUMBER_LENGTH) {
    computerNumbers.add(getRandomNumber());
  }

  return parseInt(Array.from(computerNumbers).join(""), 10);
};

export default getComputerNumber;
