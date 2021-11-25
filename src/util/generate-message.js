import {
  isDuplicatedNumber,
  isInvalidNumber,
  isWithZero,
  isNotThreeDigit,
} from "./check-valid.js";
import { BASEBALL_NUMBER_LENGTH } from "../constant/index.js";

export const generateAlertMessage = (userInputNumbers) => {
  if (isInvalidNumber(userInputNumbers)) {
    return "숫자만 입력해주세요";
  } else if (isNotThreeDigit(userInputNumbers)) {
    return "3자리수의 숫자를 입력해주세요";
  } else if (isDuplicatedNumber(userInputNumbers)) {
    return "중복되지 않은 숫자들로 입력해주세요";
  } else if (isWithZero(userInputNumbers)) {
    return "1 ~ 9사이의 숫자로 입력해주세요";
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
  return `
    <div>
      <div>
        <strong>🎉정답을 맞추셨습니다🎉</strong>
      </div>
      <span>게임을 새로 시작하시겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>
    </div>
  `;
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
