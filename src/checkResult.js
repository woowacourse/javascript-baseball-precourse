export function checkResult(computerInputNumbers, userValidNumber) {
  const checkStrikeBall = setStrikeBall(computerInputNumbers, userValidNumber)
  const resultText = setResultText(checkStrikeBall)
  
  return resultText
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
    resultText = "🎉정답을 맞추셨습니다!🎉";
  } else if (result.strike === 0 && result.ball === 0) {
    resultText = "낫싱";
  } else if (result.strike === 0) {
    resultText = `${result.ball}볼`;
  } else if (result.ball === 0) {
    resultText = `${result.strike} 스트라이크`;
  } else if (result.strike > 0 && result.ball > 0) {
    resultText = `${result.ball}볼 ${result.strike} 스트라이크`;
  }
  
  return resultText
}