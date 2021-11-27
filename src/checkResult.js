import { RESULT_MESSAGE } from "./constant.js";

export function checkResult(computerInputNumbers, userValidNumber) {
  const checkStrikeBall = setStrikeBall(computerInputNumbers, userValidNumber)
  const resultText = setResultText(checkStrikeBall)
  
  return resultText;
}

function setStrikeBall(cNumber, uNumber) {
  const result = {
    "strike": 0,
    "ball": 0
  }
  for (let i = 0; i < cNumber.length; i++) {
    if (cNumber[i] === uNumber[i]) {
      result.strike++;
    } else if (cNumber.includes(uNumber[i])) {
      result.ball++;
    }
  }
  
  return result;
}

export function setResultText(result) {
  let resultText;
  if (result.strike === 3) {
    resultText = RESULT_MESSAGE.success;
  } else if (result.strike === 0 && result.ball === 0) {
    resultText = RESULT_MESSAGE.fail;
  } else if (result.strike === 0) {
    resultText = `${result.ball}${RESULT_MESSAGE.ball}`;
  } else if (result.ball === 0) {
    resultText = `${result.strike}${RESULT_MESSAGE.strike}`;
  } else if (result.strike > 0 && result.ball > 0) {
    resultText = `${result.ball}${RESULT_MESSAGE.ball} ${result.strike}${RESULT_MESSAGE.strike}`;
  }
  
  return resultText;
}

export function showRestartGameButton(resultText) {
  const restartButton = document.getElementById("game-restart-button")
  if (resultText === RESULT_MESSAGE.success) { 
    restartButton.style.display = "block";
  }
  restartButton.addEventListener('click', () => {
    window.location.reload()
  })
}