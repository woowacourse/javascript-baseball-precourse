import { INPUT_LENGTH, ANSWER, NOTHING } from "../constant/constant.js";

function isBall(computerInput, userInput, computerIndex) {
  return userInput.find(
    (element, inputIndex) =>
      inputIndex !== computerIndex && element === computerInput[computerIndex]
  );
}

function isStrike(computerInput, userInput, computerIndex) {
  return userInput.find(
    (element, inputIndex) =>
      inputIndex === computerIndex && element === computerInput[computerIndex]
  );
}

function countBallStrike(computerInput, userInput) {
  const result = {
    ballCount: 0,
    strikeCount: 0,
  };

  for (let computerIndex = 0; computerIndex < INPUT_LENGTH; computerIndex += 1) {
    if (isBall(computerInput, userInput, computerIndex)) {
      result.ballCount += 1;
    }
    if (isStrike(computerInput, userInput, computerIndex)) {
      result.strikeCount += 1;
    }
  }
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
