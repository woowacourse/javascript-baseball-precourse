import { validateUserInput } from "./input.js";

const checkStrike = (computerInputNumbers, userInputNumbers) => {
  return [...userInputNumbers].reduce((acc, userNum, idx) => {
    acc += userNum === [...computerInputNumbers][idx];
    return acc;
  }, 0);
};

const checkBall = (computerInputNumbers, userInputNumbers) => {
  const computerInputArray = [...computerInputNumbers];
  return [...userInputNumbers].reduce((acc, userNum, idx) => {
    acc +=
      userNum !== computerInputArray[idx] &&
      computerInputArray.includes(userNum) &&
      1;
    return acc;
  }, 0);
};

const getResultHtml = (strikeCount, ballCount) => {
  if (strikeCount === 3)
    return `
    <div>🎉 정답을 맞추셨습니다! 🎉</div>
    <br />
    <div>
      게임을 새로 시작하시겠습니까?
      <button id="game-restart-button">재시작</button>
    </div>
  `;
  if (strikeCount && ballCount)
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  if (strikeCount) return `${strikeCount}스트라이크`;
  if (ballCount) return `${ballCount}볼`;
  return "낫싱";
};

export const checkResult = (computerInputNumbers, userInputNumbers) => {
  const isInputValidated = validateUserInput(userInputNumbers);
  if (isInputValidated) {
    const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);
    const ballCount = checkBall(computerInputNumbers, userInputNumbers);
    const result = getResultHtml(strikeCount, ballCount);
    return result;
  }
  return false;
};
