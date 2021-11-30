import { ANSWER, NOTHING } from "../constant/constant.js";

function isBall(computerInputElement, userInputArray, computerIndex) {
  return userInputArray.find(
    (element, inputIndex) =>
      inputIndex !== computerIndex && element === computerInputElement
  );
}

function isStrike(computerInputElement, userInputArray, computerIndex) {
  return userInputArray.find(
    (element, inputIndex) =>
      inputIndex === computerIndex && element === computerInputElement
  );
}

function countBallStrike(computerInput, userInput) {
  const result = {
    ballCount: 0,
    strikeCount: 0,
  };
  computerInput.forEach((element, index) => {
    if (isBall(element, userInput, index)) {
      result.ballCount += 1;
    }
    if (isStrike(element, userInput, index)) {
      result.strikeCount += 1;
    }
  });
  return result;
}

export default function getGameResult(computerInput, userInput) {
  if (computerInput === userInput) return ANSWER;
  const { ballCount, strikeCount } = countBallStrike(
    String(computerInput).split(""),
    String(userInput).split("")
  );
  if (ballCount === 0 && strikeCount === 0) return NOTHING;
  if (ballCount === 0 && strikeCount !== 0) return `${strikeCount}스트라이크`;
  if (ballCount !== 0 && strikeCount === 0) return `${ballCount}볼`;
  return `${ballCount}볼 ${strikeCount}스트라이크`;
}
