import { NUMBER_RULES, VERIFIED_CODE, RESULT_MESSAGE } from "./constants.js";

export function generateComputerRandomNumber() {
  const computerNumberList =  new Set();

  while (computerNumberList.size < NUMBER_RULES.LENGTH)
    computerNumberList.add(MissionUtils.Random.pickNumberInRange(NUMBER_RULES.MIN_NUMBER, NUMBER_RULES.MAX_NUMBER));

  return Array.from(computerNumberList).join('');
}

export function verifyInputNumber(userInputValue) {
  if (isNaN(userInputValue)) {
    return VERIFIED_CODE.NOT_A_NUMBER;
  } else if (userInputValue.length !== NUMBER_RULES.LENGTH) {
    return VERIFIED_CODE.THREE_DIGIT;
  } else if (userInputValue.includes(0)) {
    return VERIFIED_CODE.ZERO_INCLUDED;
  } else if (new Set(userInputValue).size !== NUMBER_RULES.LENGTH) {
    return VERIFIED_CODE.NUMBER_DUPLICATED;
  }
  return VERIFIED_CODE.VERIFIED;
}

export function showErrorMessage(resultCode) {
  if (resultCode === VERIFIED_CODE.VERIFIED) {
    return;
  }

  alert(RESULT_MESSAGE[resultCode]);
}