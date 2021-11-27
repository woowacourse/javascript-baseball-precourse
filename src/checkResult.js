export function checkResult(computerInputNumbers, userValidNumber) {
  const checkStrikeBall = setStrikeBall(computerInputNumbers, userValidNumber)
  
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