import { GAME_CONFIG } from "./constants.js";

export function checkThreeDigitNumbers(number) {
  const { MIN_NUMBER, MAX_NUMBER, LENGTH } = GAME_CONFIG;
  const regex = new RegExp(
    String.raw`^[${MIN_NUMBER}-${MAX_NUMBER}]{${LENGTH}}$`
  );
  return regex.test(number);
}

export function checkDuplicationNumbers(number) {
  const numbers = number.split("");
  const duplicatedNumberArr = numbers.filter((value, index) => {
    return numbers.indexOf(value, index + 1) > -1;
  });
  return duplicatedNumberArr.length > 0;
}
