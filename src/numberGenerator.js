const computerInputNumbers = new Array(3).fill(0);
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const NUMBER_LENGTH = 3;

export default function numberGenerator() {
  for (let i = 0; i < NUMBER_LENGTH; i++) {
    computerInputNumbers[i] =
      Math.floor(Math.random() * numberArray.length) + 1;
    numberArray.splice(numberArray.indexOf(computerInputNumbers[i], 1));
  }

  return computerInputNumbers;
}
