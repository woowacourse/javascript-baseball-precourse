import {
  isDuplicatedNumber,
  isInvalidNumber,
  isWithZero,
  isNotThreeDigit,
} from "./check-valid.js";
import {
  ALERT_MESSAGE,
  BASEBALL_NUMBER_LENGTH,
  CORRECT_MESSAGE_TEMPLETE,
} from "../constant/index.js";

export const generateAlertMessage = (userInputNumbers) => {
  if (isInvalidNumber(userInputNumbers)) {
    return ALERT_MESSAGE.ONLY_NUMBER;
  } else if (isNotThreeDigit(userInputNumbers)) {
    return ALERT_MESSAGE.ONLY_THREE_DIGIT;
  } else if (isDuplicatedNumber(userInputNumbers)) {
    return ALERT_MESSAGE.ONLY_NON_DUPLICATED_NUMBER;
  } else if (isWithZero(userInputNumbers)) {
    return ALERT_MESSAGE.NOT_INCLUDED_ZERO;
  }

  return "";
};

export const generateResultMessage = (strike, ball) => {
  if (strike === BASEBALL_NUMBER_LENGTH) {
    return generateCorrectMessage();
  }

  return generateHintMessage(strike, ball);
};

const generateCorrectMessage = () => {
  return CORRECT_MESSAGE_TEMPLETE;
};

const generateHintMessage = (strike, ball) => {
  if (strike === 0 && ball === 0) {
    return "낫싱";
  }
  if (strike === 0 && ball > 0) {
    return `${ball}볼`;
  }
  if (strike > 0 && ball === 0) {
    return `${strike}스트라이크`;
  }
  if (strike > 0 && ball > 0) {
    return `${ball}볼 ${strike}스트라이크`;
  }
};
